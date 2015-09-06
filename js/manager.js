//
//
//
//
//

//
var Ractive = require('ractive');
var _ = require('lodash');
var d3 = require('d3');

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
      sortDesc: false,
      focusOnHover: true,
      hideUnfocused: false,
      hoverValues: []
    };
  }
});

module.exports = Manager;
