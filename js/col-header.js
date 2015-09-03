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
      label: 'Colname Undefined',
      isDiscrete: false,
      index: 0,
      min: 0,
      max: 1
    };
  }
});

//
module.exports = ColHeader;
