//
//
//
//
//

//
var Ractive = require('ractive');
var CanvasDPIScaler = require('canvas-dpi-scaler');
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
      width: 160,
      hoverValue: 0,
      filtersOpen: false,
      statsOpen: false
    };
  },
  onrender: function() {

    if(!this.get('isDiscrete')) {
      // init scatter plot
      // this.canvas = this.el.querySelector('canvas');
      // this.context = this.canvas.getContext('2d');
      // CanvasDPIScaler(this.canvas, this.context);

      // build svg axis
      this.scale = d3.scale.linear();
      this.axis = d3.svg.axis().orient('top').ticks(3);
      this.axis.scale(this.scale);
      this.axisSvg = d3.select(this.el).select('.dc-ch-axis');
      this.axisSvg.append('g')
        .attr('class', 'ch-axis-g')
        .attr('transform', 'translate(0,24)');
      this.axisSvg.append('line')
        .attr('class', 'axis-hover-line')
        .attr('x1', 10).attr('y1', 0)
        .attr('x2', 10).attr('y2', 24);

      // update axis on data bounds, width changes
      this.observe('min max width', function() {
        if(this.get('isDiscrete')) { return; }

        this.scale
          .domain([this.get('min'), this.get('max')])
          .range([0, this.get('width')]);
        this.axisSvg.select('.ch-axis-g')
          .call(this.axis);
      });

      // move hover slider
      this.observe('hoverValue', function(newHoverValue) {
        var pxValue = this.scale(newHoverValue);
        this.axisSvg.select('.axis-hover-line')
          .attr('x1', pxValue-1)
          .attr('x2', pxValue-1);
      });
    }
  }
});

//
module.exports = ColHeader;
