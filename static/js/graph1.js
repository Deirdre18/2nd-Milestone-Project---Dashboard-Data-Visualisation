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
        var total_infant_deaths_per_date = date_dim.group().reduceSum(dc.pluck('infant_deaths'));

        var minDate = date_dim.bottom(1)[0].date;
        var maxDate = date_dim.top(1)[0].date;

		dc.lineChart('#chart2-here')
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
			
        dc.renderAll();
    }
	