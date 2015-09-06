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
      cols: [],
      filters: []
    };
  },
  onrender: function() {

    // create filter options w/ new column definitions
    this.observe('cols', function(cols) {
      this.set('filters',
        cols.map(function(col) {
          if(col.type === 'discrete') {
            var toggled = {}; // build new obj with T/F values
            col.uniqValues.forEach(function(v) { toggled[v] = true; });
            return { toggled: toggled };
          } else {
            return { gt: col.min, lt: col.max };
          }
        })
      );
    });
  }
});

module.exports = Manager;
