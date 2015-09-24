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

});
