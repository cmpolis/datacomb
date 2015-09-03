//
//
//
//
//

//
var Ractive = require('ractive');
var _ = require('lodash');

//
var ColHeader = require('./col-header');

//
var Manager = Ractive.extend({
  template: require('./templates/datacomb.hbs'),
  components: {
    ColHeader: ColHeader
  },
  data: function() {
    return {
      sortColNdx: null,
      sortDesc: false
    };
  }
});

module.exports = Manager;
