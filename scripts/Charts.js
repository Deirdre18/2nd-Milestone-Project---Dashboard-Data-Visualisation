//I referred to this website for Jasmine testing on D3.js - http://busypeoples.github.io/post/testing-d3-with-jasmine/


//Testing Composite Chart
function compositeChart() {
  

    var that = {};

    that.render = function() {
       var svg = d3.select('body').append('svg')
             .attr('height', '200')
             .attr('width', "")
             .append('g')
             .attr("transform", "translate(0, 0)");
             
             
    };

    return that;
}


//Testing Line Chart
function lineChart() {
  

    var that = {};

    that.render = function() {
       var svg = d3.select('body').append('svg')
             .attr('height', '360')
             .attr('width', "")
             .append('g')
             .attr("transform", "translate(0, 0)");
             
             
    };

    return that;
}

//Testing Pie Chart
function pieChart() {
  

    var that = {};

    that.render = function() {
       var svg = d3.select('body').append('svg')
             .attr('height', '500')
             .attr('width', "")
             .append('g')
             .attr("transform", "translate(0, 0)");
             
             
    };

    return that;
}





//Testing Stacked Bar Chart
function stackedChart() {
  

    var that = {};

    that.render = function() {
       var svg = d3.select('body').append('svg')
             .attr('height', '400')
             .attr('width', "")
             .append('g')
             .attr("transform", "translate(0, 0)");
             
             
    };

    return that;
}


//Testing Row Chart
function rowChart() {
  

    var that = {};

    that.render = function() {
       var svg = d3.select('body').append('svg')
             .attr('height', '400')
             .attr('width', "")
             .append('g')
             .attr("transform", "translate(0, 0)");
             
             
    };

    return that;
}
