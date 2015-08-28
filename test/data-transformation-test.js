//
//
//

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var should = chai.should();
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
    });

    it('calculates the bounds of values for given column');
    it('generates a width fn based on min/max bounds');
    it('calculates summary stats: mean, median, sd, etc..');
    it('calculates histogram from row values');
  });

  //
  //

  //
  describe('Function column definitions', function() {
    beforeEach(function() {
      this.columns = [ {
        label: 'Density',
        accessor: function(d) { return d.population / d.areaInSqKm; } } ];
    });

    it('calculates values based on fn');
  });

});
