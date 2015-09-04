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
var ColHeader = Ractive.extend({
  template: require('./templates/col-header.hbs'),
  data: function() {
    return {
      label: 'Colname Undefined',
      isDiscrete: true,
      index: 0,
      min: 0,
      max: 1,
      width: 160
    };
  },
  scale: d3.scale.linear(),
  axis: d3.svg.axis().orient('bottom').ticks(3),
  onrender: function() {

    // build svg axis
    this.axis.scale(this.scale);
    this.axisSvg = d3.select(this.el).select('.dc-ch-axis');
    this.axisSvg.append('g').attr('class', 'ch-axis-g');

    // update axis on data bounds, width changes
    this.observe('min max width', function() {
      if(this.get('isDiscrete')) { return; }

      this.scale
        .domain([this.get('min'), this.get('max')])
        .range([0, this.get('width')]);
      this.axisSvg.select('.ch-axis-g')
        .call(this.axis);
    });
  }
});

//
module.exports = ColHeader;
