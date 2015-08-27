//
//
//

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var should = chai.should();
chai.use(sinonChai);

//
describe('Data transformation (passing rows through columns)', function() {

  //
  describe('Discrete columns', function() {
    it('builds a list of unique values');
    it('assigns a color to each unique value');
  });

  //
  describe('Continuous columns', function() {
    it('calculates the bounds of values for given column');
    it('generates a width fn based on min/max bounds');
    it('calculates summary stats: mean, median, sd, etc..');
    it('calculates histogram from row values');
  });

  //
  describe('Function column definitions', function() {
    it('calculates values based on fn');
  });

});
