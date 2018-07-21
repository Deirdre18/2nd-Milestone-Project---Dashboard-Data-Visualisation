queue()
        .defer(d3.json, "data/deaths.json")
        .await(makeGraphs);

    function makeGraphs(error, deathsData) {
        var ndx = crossfilter(deathsData);

        var gender_dim = ndx.dimension(dc.pluck('gender'));
		
		var total_infant_deaths_per_gender = gender_dim.group().reduceSum(dc.pluck('infant_deaths'));
		
        dc.pieChart('#chart3-here')
            .height(330)
            .radius(90)
			.transitionDuration(1500)
            .dimension(gender_dim)
			.group(total_infant_deaths_per_gender);
			
			
		
        var name_dim = ndx.dimension(dc.pluck('name'));
        var total_infant_deaths_per_name = name_dim.group().reduceSum(dc.pluck('infant_deaths'));
		

        dc.pieChart('#chart4-here')
            .height(330)
           .radius(90)
           .transitionDuration(1500)
           .dimension(name_dim)
           .group(total_infant_deaths_per_name);
	

        dc.renderAll();
    }