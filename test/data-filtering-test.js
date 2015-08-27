//
//
//

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var should = chai.should();
chai.use(sinonChai);

//
describe('Data filtering', function() {

  //
  describe('Discrete columns', function() {
    it('each unique value has a flag to filter or not');
  });

  //
  describe('Continuous columns', function() {
    it('keeps track of filter bounds');
  });

});
