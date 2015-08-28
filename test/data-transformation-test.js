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
  });
});
