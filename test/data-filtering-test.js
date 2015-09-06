//
//
//

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var should = chai.should();
var expect = require('chai').expect;
var dataFilter = require('../js/data-filter');
chai.use(sinonChai);

var sampleRows = [
  { _values: ['a', 0, 0] },
  { _values: ['b', 0, 0.35] },
  { _values: ['c', 1, 0.85] },
  { _values: ['a', 1, 1] }
];

//
describe('Data filtering', function() {
  beforeEach(function() {
    this.filters = [
      { toggled: { a: true, b: true, c: true } },
      { gt: 0, lt: 1 },
      { gt: 0, lt: 1 } ];
  });

  //
  it('returns a new array and leaves original array unmodified', function() {
    var result = dataFilter(sampleRows, this.filters);
    result.should.not.equal(sampleRows);
    result.should.have.property('length');
  });

  //
  it('preserves array order');

  //
  describe('Discrete columns', function() {
    it('filters based on `toggled` values', function() {
      this.filters[0].toggled.a = false;
      var result = dataFilter(sampleRows, this.filters);
      expect(result.length).to.eq(2);
      expect(result.filter(function(d) { return d._values[0] === 'a'; }).length).to.eq(0);
    });
  });

  //
  describe('Continuous columns', function() {
    it('filters based on `gt`, `lt` bounds', function() {
      this.filters[2].gt = 0.5;
      var result = dataFilter(sampleRows, this.filters);
      expect(result.length).to.eq(2);
    });
    it('is inclusive with bounds', function() {
      this.filters[1].gt = 1;
      var result = dataFilter(sampleRows, this.filters);
      expect(result.length).to.eq(2);
    });
  });

});
