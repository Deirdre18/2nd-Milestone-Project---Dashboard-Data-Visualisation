queue()
    .defer(d3.json, "data/deaths.json")
    .await(makeGraphs);

function makeGraphs(error, deathsData) {
    var ndx = crossfilter(deathsData);

    var parseDate = d3.time.format("%Y").parse;
    deathsData.forEach(function(d) {
        d.date = parseDate(d.date);
    });


    var date_dim = ndx.dimension(dc.pluck('date'));

    var minDate = date_dim.bottom(1)[0].date;
    var maxDate = date_dim.top(1)[0].date;

    var home_aInfant_deathsByYear = date_dim.group().reduceSum(function(d) {
        if (d.name === 'Home_A') {
            return +d.infant_deaths;
        }
        else {
            return 0;
        }
    });
    var home_bInfant_deathsByYear = date_dim.group().reduceSum(function(d) {
        if (d.name === 'Home_B') {
            return +d.infant_deaths;
        }
        else {
            return 0;
        }
    });


    var compositeChart = dc.compositeChart("#chart1-here")
    compositeChart
        .width("")
        .height(200)
        .dimension(date_dim)
        .transitionDuration(250)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Year")
        .yAxisLabel("Infant_Deaths")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(false)
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
        .width("")
        .height(360)
        .transitionDuration(500)
        .margins({
            top: 10,
            right: 50,
            bottom: 30,
            left: 50
        })
        .dimension(date_dim)
        .group(total_infant_deaths_per_date)
        .transitionDuration(250)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Year")
        .yAxisLabel("Infant_Deaths");


    var gender_dim = ndx.dimension(dc.pluck('gender'));
    var total_infant_deaths_per_gender = gender_dim.group().reduceSum(dc.pluck('infant_deaths'));

    dc.pieChart("#chart3-here")
        .width("")
        .height(500)
        .transitionDuration(250)
        .radius(90)
        .dimension(gender_dim)
        .group(total_infant_deaths_per_gender);



    var name_dim = ndx.dimension(dc.pluck('name'));
    var total_infant_deaths_per_name = name_dim.group().reduceSum(dc.pluck('infant_deaths'));


    dc.pieChart("#chart4-here")
        .width("")
        .height(500)
        .transitionDuration(250)
        .radius(90)
        .transitionDuration(1500)
        .dimension(name_dim)
        .group(total_infant_deaths_per_name);




    var name_dim = ndx.dimension(dc.pluck('name'));

    var infant_deathsByNameGenderF = name_dim.group().reduceSum(function(d) {
        if (d.gender === 'F') {
            return +d.infant_deaths;
        }
        else {
            return 0;
        }
    });
    var infant_deathsByNameGenderM = name_dim.group().reduceSum(function(d) {
        if (d.gender === 'M') {
            return +d.infant_deaths;
        }
        else {
            return 0;
        }
    });

    var stackedChart = dc.barChart("#chart5-here")
    stackedChart
        .width("")
        .height(400)
        .transitionDuration(250)
        .dimension(name_dim)
        .group(infant_deathsByNameGenderF, "F")
        .stack(infant_deathsByNameGenderM, "M")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Infant_Deaths")
        .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));

    //to have stacks for female and male floating to left, without using 'float'.
    stackedChart.margins().right = 66;


    var nameDim = ndx.dimension(dc.pluck('name'));
    var selectName = dc.selectMenu("#name-selector");
    genderDim = ndx.dimension(dc.pluck('name'));
    selectNameGroup = nameDim.group();

    selectName
        .dimension(nameDim)
        .group(selectNameGroup);

    //'Name' being = 'Gender' for the purpose of this chart (ie) var infant_deathsByName = var infant_deathsByGender. 

    var nameDim = ndx.dimension(dc.pluck('name'));
    var infant_deathsByName = nameDim.group().reduceSum(dc.pluck('infant_deaths'));
    var rowChart = dc.rowChart("#chart6-here")
        .width("")
        .height(400)
        .transitionDuration(250)
        .dimension(nameDim)
        .group(infant_deathsByName)
        .xAxis().ticks(4)

    dc.renderAll();

}

// Credit to DustanV (Stack Overflow Contributor) on re-sizing using JQuery. Used this solution to re-size graphs.
//https://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed		

//Resizing charts to be responsive across mobile devices.   As the Parent element is nested in bootstrap .row > <div class="col-xs-12 col-sm-12 col-md-4" id="chart2-here" class="line-chart">, etc, so widths are calculated via bootstrap grid and there is no need to hard code.  On rendering, the width and height are adjusted, to fill up the grid. On resizing, a function for window.resize is used to make the charts render on mobile and smaller devices. As part of implementing this, I refered to many sources, including this one - https://groups.google.com/forum/#!topic/dc-js-user-group/2pKK_MCNudA



$(window).bind('resize', function(e) {
    window.resizeEvt;
    $(window).resize(function() {
        clearTimeout(window.resizeEvt);
        window.resizeEvt = setTimeout(function() {
            //code to do after window is resized
        }, 250);
    });
});
