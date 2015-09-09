//
//
// A simple Ractive component for a range slider built with two
//  html <input type='range'> elements.
// Copyright (c) 2015 Chris Polis, All Rights Reserved.

//
var Ractive = require('ractive');

//
var RangeSlider = Ractive.extend({
  template: require('./templates/range-slider.hbs'),

  // defaults
  data: function() {
    return {
      upper: 3,
      lower: 6,
      upperBound: 10,
      lowerBound: 0,
      step: 0.2,
      width: 100
    }
  },

  //
  oninit: function() {
    this.observe('upper', function(newUpper) {
      var lower = this.get('lower'),
          step  = this.get('step');
      if(newUpper <= lower) { this.set('lower', newUpper - step); }
    }, { init: false });
    this.observe('lower', function(newLower) {
      var upper = this.get('upper'),
          step  = this.get('step');
      if(newLower >= upper) { this.set('upper', newLower + step); }
    }, { init: false });
  },

  // derivative values and properties
  computed: { }
});


//
module.exports = RangeSlider;
