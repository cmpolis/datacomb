//
//
//

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var should = chai.should();
var expect = require('chai').expect;
var sampleData = require('./sample-data');
var dataParser = require('../js/data-parser');
chai.use(sinonChai);

//
describe('Data transformation (passing rows through columns)', function() {
  beforeEach(function() {
    this.rows = sampleData.countries;
  });

  //
  //

  //
  describe('Discrete columns', function() {
    beforeEach(function() {
      this.columns = [ {
        label: 'Continent',
        accessor: 'continent',
        type: 'discrete' } ];
    });

    it('builds a list of unique values', function() {
      var parsed = dataParser(this.rows, this.columns),
          parsedCol = parsed.columns[0];
      parsedCol.uniqValues.should.have.length(7);
      parsedCol.uniqValues.should.include('EU');
    });
    it('sets row value for column', function() {
      var parsed = dataParser(this.rows, this.columns),
          parsedRow = parsed.rows[0];
      parsedRow._values[0].should.equal('EU');
    });
  });

  //
  //

  //
  describe('Continuous columns', function() {
    beforeEach(function() {
      this.columns = [ {
        label: 'Population',
        accessor: 'population' } ];
      this.parsedCol = dataParser(this.rows, this.columns).columns[0];
    });

    it('calculates the bounds of values for given column', function() {
      this.parsedCol.should.have.property('min');
      this.parsedCol.should.have.property('max');
      this.parsedCol.min.should.be.below(this.parsedCol.max);
    });
    it('generates a width fn based on min/max bounds', function() {
      var widthFn = this.parsedCol.widthFn;
      widthFn.should.be.a('function');
      expect(widthFn(this.parsedCol.min)).to.equal(0);
      expect(widthFn(this.parsedCol.max)).to.equal(100);
    });
    it('calculates summary stats: mean, median, sd, etc..', function() {
      this.parsedCol.should.have.property('mean');
      this.parsedCol.should.have.property('median');
      this.parsedCol.should.have.property('sd');
    });
    it('calculates histogram from row values');
    it('sets row value for column', function() {
      var parsed = dataParser(this.rows, this.columns),
          parsedRow = parsed.rows[0];
      parsedRow._values[0].should.equal(84000);
    });
    it('sets row width for column', function() {
      var parsed = dataParser(this.rows, this.columns),
          parsedRow = parsed.rows[0];
      parsedRow._widths[0].should.be.a('Number');
    });
  });

  //
  //

  //
  describe('Function column definitions', function() {
    beforeEach(function() {
      this.columns = [ {
          label: 'Density',
          accessor: function(d) { return d.population / d.areaInSqKm; } },
        { label: 'DoubleNdx',
          accessor: function(d, ndx) { return ndx * 2; } } ];
      this.densityColumn = dataParser(this.rows, this.columns).columns[0];
      this.doubleNdxColumn = dataParser(this.rows, this.columns).columns[1];
    });

    it('calculates values based on fn', function() {
      expect(this.doubleNdxColumn.min).to.equal(0);
      expect(this.doubleNdxColumn.max).to.equal((this.rows.length-1) * 2);
    });
    it('sets row value for column', function() {
      var parsed = dataParser(this.rows, this.columns);
      parsed.rows[0]._values[1].should.equal(0);
      parsed.rows[1]._values[1].should.equal(2);
    });
  });

  //
  describe('Columns with format functions', function() {
    beforeEach(function() {
      this.columns = [ {
          label: 'with format',
          format: function(v) { return 'fizz' + v; },
          accessor: function(d) { return 'foo' } },
        { label: 'without format',
          accessor: function(d) { return 'foo' } } ];
    });

    it('uses the format function for labels', function() {
      var parsed = dataParser(this.rows, this.columns),
          parsedRow = parsed.rows[0];
      parsedRow._labels[0].should.equal('fizzfoo');
      parsedRow._labels[1].should.equal('foo');
    });
  });

  //
  describe('Row label definition', function() {
    beforeEach(function() {
      this.columns = [ {
        label: 'Pop',
        accessor: 'population' } ];
    });

    it('uses row index when `label` is not passed in', function() {
      var parsed = dataParser(this.rows, this.columns);
      parsed.rows[0]._rowLabel.should.equal('0');
    });
    it('can be passed in as a string(property name)', function() {
      var parsed = dataParser(this.rows, this.columns, 'countryName');
      parsed.rows[0]._rowLabel.should.equal('Andorra');
    });
    it('can be passed in as an accessor function with `row`, `ndx` params', function() {
      var parsed = dataParser(this.rows, this.columns,
        function(d,ndx) { return d.continent + ndx });
      parsed.rows[0]._rowLabel.should.equal('EU0');
    });
  });
});
