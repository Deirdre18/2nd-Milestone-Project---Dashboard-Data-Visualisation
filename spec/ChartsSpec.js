//I referred to this website for Jasmine testing on D3.js - http://busypeoples.github.io/post/testing-d3-with-jasmine/


//Testing Composite Chart

describe('Test D3.js with jasmine ', function() {
  var c;

  beforeEach(function() {
    c = compositeChart();
    c.render();
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  describe('the svg' ,function() {
    it('should be created', function() {
        expect(getSvg()).not.toBeNull();
    });

    it('should have the correct height', function() {
      expect(getSvg().attr('height')).toBe('200');
    });
    
    it('should have the correct width', function() {
      expect(getSvg().attr('width')).toBe("");
    });
    
    
  
  });

  function getSvg() {
    return d3.select('svg');
  }

});

//Testing Line Chart

describe('Test D3.js with jasmine ', function() {
  var c;

  beforeEach(function() {
    c = lineChart();
    c.render();
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  describe('the svg' ,function() {
    it('should be created', function() {
        expect(getSvg()).not.toBeNull();
    });

    it('should have the correct height', function() {
      expect(getSvg().attr('height')).toBe('360');
    });
    
    it('should have the correct width', function() {
      expect(getSvg().attr('width')).toBe("");
    });
    
    
  
  });

  function getSvg() {
    return d3.select('svg');
  }

});



//Testing Pie Charts (both Pie Charts have same heights)
describe('Test D3.js with jasmine ', function() {
  var c;

  beforeEach(function() {
    c = pieChart();
    c.render();
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  describe('the svg' ,function() {
    it('should be created', function() {
        expect(getSvg()).not.toBeNull();
    });

    it('should have the correct height', function() {
      expect(getSvg().attr('height')).toBe('500');
    });
    
    it('should have the correct width', function() {
      expect(getSvg().attr('width')).toBe("");
    });
  
 
  });

  function getSvg() {
    return d3.select('svg');
  }

});





//Testing Stacked Bar Charts (both Pie Charts have same heights)
describe('Test D3.js with jasmine ', function() {
  var c;

  beforeEach(function() {
    c = stackedChart();
    c.render();
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  describe('the svg' ,function() {
    it('should be created', function() {
        expect(getSvg()).not.toBeNull();
    });

    it('should have the correct height', function() {
      expect(getSvg().attr('height')).toBe('400');
    });
    
    it('should have the correct width', function() {
      expect(getSvg().attr('width')).toBe("");
    });
  
 
  });

  function getSvg() {
    return d3.select('svg');
  }

});

   


    
//Testing Row Selector Chart
describe('Test D3.js with jasmine ', function() {
  var c;

  beforeEach(function() {
    c = rowChart();
    c.render();
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  describe('the svg' ,function() {
    it('should be created', function() {
        expect(getSvg()).not.toBeNull();
    });

    it('should have the correct height', function() {
      expect(getSvg().attr('height')).toBe('400');
    });
    
    it('should have the correct width', function() {
      expect(getSvg().attr('width')).toBe("");
    });
  
 
  });

  function getSvg() {
    return d3.select('svg');
  }

});

 //Testing Bar Chart - data
    describe('Test D3.js with jasmine ', function() {
  var c;

  beforeEach(function() {
    c = barChart();
    c.render();
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  describe('working with data' ,function() {
    it('should be null if no data has been specified', function() {
      var nullData =  null//[{ date: '2014-01', value: 100}, {date: '2014-02', value: 215}];
      expect(nullData).toBe(null);
    });

    
    it('should be able to update the data', function() {
        var testData =  [{ date: '2014-01', value: 100}, {date: '2014-02', value: 215}];
        var setData = testData;
        expect(setData).toBe(testData);
    });
    
  });
  
  function getSvg() {
    return d3.select('svg');
  }

});


 
    
    
  
  
