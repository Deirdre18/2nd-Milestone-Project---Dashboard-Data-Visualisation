

    queue()
        .defer(d3.json, "data/deaths.json")
        .await(makeGraphs);

    function makeGraphs(error, deathsData) {
        var ndx = crossfilter(deathsData);

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

        var stackedChart = dc.barChart('#chart5-here');
        stackedChart
            .width(500)
            .height(500)
            .dimension(name_dim)
            .group(infant_deathsByNameGenderF, "Female Deaths")
            .stack(infant_deathsByNameGenderM, "Male Deaths")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
			.yAxisLabel("Infant_Deaths")
            .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));

        stackedChart.margins().right = 100;

        dc.renderAll();
    }