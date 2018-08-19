queue()
    .defer(d3.json, "data/deaths.json")
    .await(makeGraphs);

    function makeGraphs(error, deathsData) {
	var ndx = crossfilter(deathsData);
	
		var parseDate = d3.time.format("%Y").parse;
        deathsData.forEach(function(d){
            d.date = parseDate(d.date);
        });

		
		var date_dim = ndx.dimension(dc.pluck('date'));

        var minDate = date_dim.bottom(1)[0].date;
        var maxDate = date_dim.top(1)[0].date;

        var home_aInfant_deathsByYear = date_dim.group().reduceSum(function (d) {
                if (d.name === 'Home_A') {
                    return +d.infant_deaths;
                } else {
                    return 0;
                }
            });
        var home_bInfant_deathsByYear = date_dim.group().reduceSum(function (d) {
            if (d.name === 'Home_B') {
                return +d.infant_deaths;
            } else {
                return 0;
            }
        });
        
        		
        var compositeChart = dc.compositeChart("#chart1-here")
        compositeChart
            .width(990)
            .height(200)
            .dimension(date_dim)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .yAxisLabel("Infant_Deaths")
            .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
            .renderHorizontalGridLines(true)
            .compose([
                dc.lineChart(compositeChart)
                    .colors('green')
                    .group(home_aInfant_deathsByYear, 'Home_A'),
                dc.lineChart(compositeChart)
                    .colors('red')
                    .group(home_bInfant_deathsByYear, 'Home_B')
            ])
            .brushOn(false)
			.render();
			
            

		var date_dim = ndx.dimension(dc.pluck('date'));
        var total_infant_deaths_per_date = date_dim.group().reduceSum(dc.pluck('infant_deaths'));

        var minDate = date_dim.bottom(1)[0].date;
        var maxDate = date_dim.top(1)[0].date;

		dc.lineChart("#chart2-here")
            .width(1000)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(date_dim)
            .group(total_infant_deaths_per_date)
            .transitionDuration(500)
            .x(d3.time.scale().domain([minDate,maxDate]))
            .xAxisLabel("Year")
			.yAxisLabel("Infant_Deaths")
            .yAxis().ticks(4);
			
		var gender_dim = ndx.dimension(dc.pluck('gender'));
		var total_infant_deaths_per_gender = gender_dim.group().reduceSum(dc.pluck('infant_deaths'));
		
        dc.pieChart("#chart3-here")
            .height(365)
            .radius(90)
			.transitionDuration(1500)
            .dimension(gender_dim)
			.group(total_infant_deaths_per_gender);
			
			
		
        var name_dim = ndx.dimension(dc.pluck('name'));
        var total_infant_deaths_per_name = name_dim.group().reduceSum(dc.pluck('infant_deaths'));
		

        dc.pieChart("#chart4-here")
            .height(365)
            .radius(90)
            .transitionDuration(1500)
            .dimension(name_dim)
            .group(total_infant_deaths_per_name);
			
			
		var name_dim = ndx.dimension(dc.pluck('name'));

        var infant_deathsByNameGenderF = name_dim.group().reduceSum(function (d) {
                if (d.gender === 'F') {
                    return +d.infant_deaths;
                } else {
                    return 0;
                }
            });
        var infant_deathsByNameGenderM = name_dim.group().reduceSum(function (d) {
                if (d.gender === 'M') {
                    return +d.infant_deaths;
                } else {
                    return 0;
                }
            });

        var stackedChart = dc.barChart("#chart5-here")
        stackedChart
            .width(475)
            .height(500)
            .dimension(name_dim)
            .group(infant_deathsByNameGenderF, "Female Deaths")
            .stack(infant_deathsByNameGenderM, "Male Deaths")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
			.yAxisLabel("Infant_Deaths")
            .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));

        stackedChart.margins().right = 100;
		
		
        var nameDim = ndx.dimension(dc.pluck('name'));
        var selectName = dc.selectMenu("#name-selector");
        genderDim = ndx.dimension(dc.pluck('name'));
        selectNameGroup = nameDim.group();

        selectName
            .dimension(nameDim)
            .group(selectNameGroup);      
            
            
        var nameDim = ndx.dimension(dc.pluck('name'));
        var infant_deathsByName = nameDim.group().reduceSum(dc.pluck('infant_deaths'));
        dc.rowChart("#chart6-here")
            .width(700)
            .height(330)
            .dimension(nameDim)
            .group(infant_deathsByName)
            .xAxis().ticks(4);    

        
        dc.renderAll();
		
    }