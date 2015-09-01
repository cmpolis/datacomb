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
  this.parsed = dataParser(this.data, this.columns);

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
  this.table = new ScrollableTable({
    el: document.querySelector('#dc-target'),
    data: this.parsed.rows,
    heightFn: function(d) { return 10; },
    buildRow: function(d) {
      var node = document.createElement('div');
      node.classList.add('dc-row');
      node.innerHTML = "<div>"+d.ndx+"</div>";
      return node;
    },
    updateRow: function(row, el) {
      console.log(row, el);
      el.childNodes[0].textContent = row.ndx;
    }
  });
};

//
module.exports = Datacomb;
