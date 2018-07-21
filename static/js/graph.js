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
        
        
        var compositeChart = dc.compositeChart('#chart1-here');
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

        dc.renderAll();
		
    }
	
	