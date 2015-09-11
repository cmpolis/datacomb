//
//
//

//
var Ractive = require('ractive');
var CanvasDPIScaler = require('canvas-dpi-scaler');

//
var ScatterPlot = Ractive.extend({
  template: require('./templates/scatter-plot.hbs'),

  //
  data: function() {
    return {
      height: 100,
      width: 100
    };
  },

  //
  onrender: function() {
    this.canvas = this.el.querySelector('canvas');
    this.context = this.canvas.getContext('2d');
    CanvasDPIScaler(this.canvas, this.context);

    console.log('init scatter plot...', this);
  },

  //
  computed: {
  }
});


//
module.exports = ScatterPlot;
