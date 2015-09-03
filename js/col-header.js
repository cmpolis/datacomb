//
//
//
//
//

//
var Ractive = require('ractive');
var _ = require('lodash');

//
var ColHeader = Ractive.extend({
  template: require('./templates/col-header.hbs'),
  data: function() {
    return {
      name: 'Colname Undefined'
      isDiscrete: false,
      min: 0,
      max: 1
    };
  }
});

//
module.exports = ColHeader;
