queue()
        .defer(d3.json, "data/deaths.json")
        .await(makeGraphs);
    
    function makeGraphs(error, deathsData) {
        var ndx = crossfilter(deathsData);

        var nameDim = ndx.dimension(dc.pluck('name'));

        var selectName = dc.selectMenu('#name-selector');
        genderDim = ndx.dimension(dc.pluck('name'));
        selectNameGroup = nameDim.group();

        selectName
            .dimension(nameDim)
            .group(selectNameGroup);      
            
            
        var nameDim = ndx.dimension(dc.pluck('name'));
        var infant_deathsByName = nameDim.group().reduceSum(dc.pluck('infant_deaths'));
        dc.rowChart("#chart6-here")
            .width(600)
            .height(330)
            .dimension(nameDim)
            .group(infant_deathsByName)
            .xAxis().ticks(4);    

        dc.renderAll();
    };