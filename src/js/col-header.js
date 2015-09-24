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
  template: require('../templates/col-header.hbs'),
  data: function() {
    return {
      label: 'Colname Undefined',
      isDiscrete: true,
      index: 0,
      min: 0,
      max: 1,
      width: 160,
      histogramHeight: 80,
      scatterHeight: 160,
      hoverValue: 0,
      filter: {},
      filtersOpen: false,
      statsOpen: false,
      histogramBarData: [],
      scatterData: []
    };
  },
  onrender: function() {
    var self = this;

    if(!this.get('isDiscrete')) {

      // build svg axis
      this.scale = d3.scale.linear();
      this.axis = d3.svg.axis().orient('top').ticks(3);
      this.axis.scale(this.scale);
      this.axisSvg = d3.select(this.el).select('.dc-ch-axis');
      this.axisSvg.select('.ch-axis-g').append('line')
        .attr('class', 'axis-hover-line')
        .attr('x1', 10).attr('y1', 0)
        .attr('x2', 10).attr('y2', -24);

      // update axis on data bounds, width changes
      this.observe('min max width', function() {
        if(this.get('isDiscrete')) { return; }

        this.scale
          .domain([this.get('min'), this.get('max')])
          .range([0, this.get('width')]);
        this.axisSvg.select('.ch-axis-g')
          .call(this.axis);
      });
      var histogram = this.get('histogram'),
          histogramMax = this.get('histogramMax'),
          histogramHeight = this.get('histogramHeight');
      this.set('histogramBarData', histogram.map(function(bin) {
        return _.extend(bin, {
          x0: self.scale(bin.lower),
          x1: self.scale(bin.upper),
          height: (bin.count / histogramMax) * histogramHeight
        });
      }));

      // move hover slider
      this.observe('hoverValue', function(newHoverValue) {
        var pxValue = this.scale(newHoverValue);
        this.axisSvg.select('.axis-hover-line')
          .attr('x1', pxValue-1)
          .attr('x2', pxValue-1);
      });

      // build scatter plot
      this.canvas = this.el.querySelector('canvas'),
      this.context = this.canvas.getContext('2d');
      CanvasDPIScaler(this.canvas, this.context, this.get('width'), this.get('scatterHeight'));
      this.observe('scatterData', function(points) {
        var height = this.get('scatterHeight'),
            width = this.get('width'),
            radius = 2.5,
            canvas = this.canvas, //= this.el.querySelector('canvas'),
            context = this.context; //= this.canvas.getContext('2d');

        // TODO: clean up this rendering, generalize...
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 0.23;
        context.fillStyle = '#1166B7';
        points.forEach(function(point, ndx) {
          context.beginPath();
          context.arc(point[1] * (width / 100),
                      (100 - point[0]) * (height / 100),
                      radius,
                      0,
                      2 * Math.PI,
                      false);
          context.fillStyle = point[2] ? 'red' : '#1166B7';
          if(point[3]) { context.fillStyle = 'purple'; }
          context.globalAlpha = point[3] ? 1 : point[2] ? 0.28 : 0.13;
          context.fill();
        });

      }, { init: false });
    }
  }
});

//
module.exports = ColHeader;
