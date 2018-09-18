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





//Testing Stacked Bar Chart
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
    
    
    
  
  