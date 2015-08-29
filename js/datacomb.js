//
//
// Datacomb interface class

//
"use strict";

// NPM deps
var ScrollableTable = require('smart-table-scroll');

// local deps
var dataParser = require('./data-parser');

//
var defaults = { };

//
var Datacomb = function(opts) {
  console.log('init\'d Datacomb...');
  if(!opts.el) { throw new Error("Need to pass `el` into Datacomb."); }
  if(!opts.data) { throw new Error("Need to pass `data` into Datacomb."); }
  if(!opts.columns) { throw new Error("Need to pass `columns` into Datacomb."); }

  // inherit from options, defaults
  for(var key in defaults) { this[key] = defaults[key]; }
  for(var key in opts) { this[key] = opts[key]; }

  //
  this.parsed = dataParser(this.rows, this.columns);

  //
  this.buildDom();
  this.initTable();
};
//
//

//
Datacomb.prototype.buildDom = function() {
  console.log('adding datacomb dom elements...');
};

//
//

//
Datacomb.prototype.initTable = function() {
  this.table = new ScrollableTable({ });
};

//
module.exports = Datacomb;
