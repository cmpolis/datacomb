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
var RangeSlider = require('ractive-range-slider');

//
var Manager = Ractive.extend({
  template: require('./templates/datacomb.hbs'),
  partials: {
    colFilter: require('./templates/col-filter.hbs'),
    summaryStats: require('./templates/summary-stats.hbs')
  },
  components: {
    ColHeader: ColHeader,
    RangeSlider: RangeSlider
  },

  //
  data: function() {
    return {
      sortColNdx: null,
      sortDesc: false,
      focusOnHover: true,
      hideUnfocused: false,
      filtersOpen: false,
      statsOpen: false,
      histogramsOpen: false,
      hoverValues: [],
      cols: [],
      filters: [],
      groupByColNdx: -1,
      colorByColNdx: -1,
      scatterPlotNdx: -1
    };
  },

  //
  computed: {
    discreteCols: function() {
      return _.where(this.get('cols'), { type: 'discrete' });
    }
  },

  //
  onrender: function() {

    // reset filters back to initial state
    this.resetFilters = function(cols) {
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
    };
    this.observe('cols', this.resetFilters);
    this.on('*.reset-filters', function() {
      this.resetFilters(this.get('cols'));
    });
  }
});

module.exports = Manager;
