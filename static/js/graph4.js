queue()
        .defer(d3.json, "data/deaths.json")
        .await(makeGraphs);
    
    function makeGraphs(error, deathsData) {
        var ndx = crossfilter(deathsData);

        var genderDim = ndx.dimension(dc.pluck('gender'));

        var selectGender = dc.selectMenu('#gender-selector');
        genderDim = ndx.dimension(dc.pluck('gender'));
        selectGenderGroup = genderDim.group();

        selectGender
            .dimension(genderDim)
            .group(selectGenderGroup);      
            
            
        var nameDim = ndx.dimension(dc.pluck('name'));
        var infant_deathsByName = nameDim.group().reduceSum(dc.pluck('infant_deaths'));
        dc.rowChart("#chart5-here")
            .width(600)
            .height(330)
            .dimension(nameDim)
            .group(infant_deathsByName)
            .xAxis().ticks(4);    

        dc.renderAll();
    };