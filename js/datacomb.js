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
  this.parsed = dataParser(this.data, this.columns, this.labelAccessor);

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
  var self = this;

  this.table = new ScrollableTable({
    el: this.el.querySelector('.dc-table'),
    data: this.parsed.rows,
    heightFn: function(d) { return 10; },
    buildRow: function(d) {
      var node = document.createElement('div');
      var nodeContent = "<div class='dc-rlabel'>"+d._rowLabel+"</div>";
      node.classList.add('dc-row');
      self.parsed.columns.forEach(function(column, colNdx) {
        if(column.type === 'discrete') {
          nodeContent += "<div class='dc-disccell'>"+d._values[colNdx]+"</div>";
        } else {
          nodeContent += "<div class='dc-datacell'><div class='dc-bar' style='width:"+d._widths[colNdx]+"%'></div>"+d._values[colNdx]+"</div>";
        }
      });
      node.innerHTML = nodeContent;
      return node;
    },
    updateRow: function(d, el) {
      console.log(d, el);
      el.childNodes[0].textContent = d._rowLabel;
    }
  });
};

//
module.exports = Datacomb;
