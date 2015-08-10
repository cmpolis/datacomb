//
//
//

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var should = chai.should();
chai.use(sinonChai);

//
describe('Testing environment', function() {

  //
  it('should run tests w/ `should` syntax', function() {
    var meaningOfLife = 42;
    meaningOfLife.should.equal(42);
  });

});

//
describe('Project setup', function() {
  beforeEach(function() {
    this.project = require('../js');
  });

  //
  it('should export components from a root include', function() {
    this.project.should.have.property('colors');
  });

  //
  it('should be able to require components directly', function() {
    var requireFn = function() { require('../js/colors'); };
    requireFn.should.not.throw(Error);
  });

});
