//
//
// UI Component that manages a (large) scrollable table by reusing row <div> nodes
//  allows for rows to be different heights and dynamic sizing
//
// a la: https://github.com/NeXTs/Clusterize.js, https://github.com/facebook/fixed-data-table
//
//  |       | <- total table area, rows exist in data, but not on dom
//  |xxxxxxx| <- buffer of rows on dom, but not visible
//  |-------|
//  |#######| <- visible screen area
//  |#######|
//  |-------|
//  |xxxxxxx|
//  |       |

// Required params:
//  el: container element to render to
//  data: array of objects containing row data
//  buildRow: called when first building table rows (return node)
//  updateRow: called when switching row data into a dom node

//
var _  = require('lodash'),
    d3 = require('d3');

//
var defaults = {
  heightFn: function() { return 10; },
  availableNods: 100,
};

//
var ScrollableTable = function(opts) {
  _extend(this, defaults, opts);
  if(!this.el) { throw new Error("Need to pass `el` into ScrollableTable."); }
  if(!this.data) { throw new Error("Need to pass `data` into ScrollableTable."); }
  if(!this.updateRow) { throw new Error("Need to pass `updateRow` into ScrollableTable."); }

  //
  this.heightFn = this.heightFn || defaultHeightFn;
  this.elSel = d3.select(el);
};

//
//

// Reset ior init dom elements and scrolling state
ScrollableTable.prototype.reset = function() {
  this.yPosition = 0;
  this.setHeight();
};

//
//

//
ScrollableTable.prototype.calculateHeight = function(heightFn) {
  this.totalHeight = _.sum(this.data, (heightFn || this.heightFn));
  return this.totalHeight;
};
ScrollableTable.prototype.setHeight = function(heightFn) {
  this.elSel.style('height', this.calculateHeight());
};


//
module.exports = ScrollableTable;
