//
//
//
//
//

//
var Ractive = require('ractive');
var _ = require('lodash');

//
var Manager = Ractive.extend({
  template: require('./templates/datacomb.hbs'),
  data: function() {
    return {
      sortColNdx: null,
      sortDesc: false
    };
  }
});

module.exports = Manager;
