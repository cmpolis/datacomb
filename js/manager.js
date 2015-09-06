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
  partials: {
    colFilter: require('./templates/col-filter.hbs')
  },
  components: {
    ColHeader: ColHeader
  },
  data: function() {
    return {
      sortColNdx: null,
      sortDesc: false,
      focusOnHover: true,
      hideUnfocused: false,
      filtersOpen: false,
      hoverValues: [],
      cols: []
    };
  }
});

module.exports = Manager;
