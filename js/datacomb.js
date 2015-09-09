//
//
// Datacomb interface class

//
"use strict";

// NPM deps
var ScrollableTable = require('smart-table-scroll');
var Ractive = require('ractive');
var _ = require('lodash');

// local deps
var dataParser = require('./data-parser');
var dataFilter = require('./data-filter');
var Manager = require('./manager');
var palette = require('./palette').light12;

//
var defaults = { };

//
var Datacomb = function(opts) {
  if(!opts.el) { throw new Error("Need to pass `el` into Datacomb."); }
  if(!opts.data) { throw new Error("Need to pass `data` into Datacomb."); }
  if(!opts.columns) { throw new Error("Need to pass `columns` into Datacomb."); }

  // inherit from options, defaults
  for(var key in defaults) { this[key] = defaults[key]; }
  for(var key in opts) { this[key] = opts[key]; }

  //
  this.groupByColNdx = -1;
  this.parsed = dataParser(this.data, this.columns, this.labelAccessor);
  this.allRows = this.parsed.rows;
  this.pipelinedRows = this.allRows;

  //
  this.initManager();
  this.initTable();
};

//
Datacomb.prototype.initManager = function() {
  var self = this;

  // init Ractive element to build dom, handle settings and interaction
  this.manager = new Manager({
    el: this.el,
    data: {
      cols: this.parsed.columns
    }
  });

  // this.manager.observe('sortColNdx sortDesc', this.applySort.bind(this), { init: false });
  this.manager.observe('filters', this.applyFilters.bind(this), { init: false });
  this.manager.on('*.sort-by-col', function(evt, colNdx, descOrder) {
    self.applySort(colNdx, descOrder);
  });
  this.manager.observe('focusOnHover', function(shouldFocus) {
    if(!shouldFocus) {
      self.allRows[self.currentHoverNdx].hovered = false;
      self.table.updateData(self.getRows());
    }
  }, { init: false });
  this.manager.observe('groupByColNdx', function(colNdx) {
    self.table.updateData(self.getRows({ groupByColNdx: colNdx }));
  }, { init: false });
  this.manager.observe('colorByColNdx', function(colNdx) {
    self.table.updateData(self.getRows({ colorByColNdx: colNdx }));
  }, { init: false });
  this.manager.observe('hideUnfocused', function(shouldHide) {
    self.table.updateData(self.getRows({ hideUnfocused: shouldHide }));
  }, { init: false });
  this.manager.on('focus-all', function(evt) {
    self.allRows.forEach(function(r) { r.focused = true; });
    self.table.updateData(self.getRows());
  });
  this.manager.on('unfocus-all', function(evt) {
    self.allRows.forEach(function(r) { r.focused = false; });
    self.table.updateData(self.getRows());
  });

};

//
//

//
Datacomb.prototype.initTable = function() {
  var self = this;

  this.table = new ScrollableTable({
    el: this.el.querySelector('.dc-table'),
    data: this.allRows,
    availableNodes: 1000,
    heightFn: function(d) { return (d.hovered || d.focused) ? 17 : 4; },
    buildRow: function(d) {
      var node = document.createElement('div');
      var nodeContent = "<div class='dc-rlabel'><div class='dc-label'>"+d._rowLabel+"</div></div>";
      node.classList.add('dc-row');
      //node.setAttribute('dc-color-ndx', '');
      node._dcndx = d.ndx;
      self.parsed.columns.forEach(function(column, colNdx) {
        if(column.type === 'discrete') {
          nodeContent += "<div class='dc-disccell'><div class='dc-disc-val'>"+d._values[colNdx]+"</div></div>";
        } else {
          nodeContent += "<div class='dc-datacell'><div class='dc-bar' style='width:"+d._widths[colNdx]+"%'></div><div class='dc-cont-val'>"+d._labels[colNdx]+"</div></div>";
        }
      });
      node.innerHTML = nodeContent;
      return node;
    },
    updateRow: function(d, el) {
      el._dcndx = d.ndx;
      el.childNodes[0].childNodes[0].textContent = d._rowLabel;
      //d._colorNdx ? el.setAttribute('dc-color-ndx', d._colorNdx) : el.removeAttribute('dc-color-ndx');
      d.hovered ? el.setAttribute('dc-hover', '') : el.removeAttribute('dc-hover');
      (d.hovered || d.focused) ?
        el.setAttribute('dc-expand', '') :
        el.removeAttribute('dc-expand');

      for(var colNdx = 0; colNdx < self.parsed.columns.length; colNdx++) {
        if(self.parsed.columns[colNdx].type === 'discrete') {
          el.childNodes[colNdx + 1].childNodes[0].textContent = d._values[colNdx];

        } else {
          el.childNodes[colNdx+1].childNodes[0].style.width = ''+d._widths[colNdx]+'%';
          el.childNodes[colNdx+1].childNodes[0].style.backgroundColor =
            (d._colorNdx || d._colorNdx === 0) ? palette[d._colorNdx % palette.length] : null;
          el.childNodes[colNdx + 1].childNodes[1].textContent = d._labels[colNdx];

        }
      }
    }
  });

  this.currentHoverNdx = 0;
  this.isDragging = false;

  // Hover interaction: highlight row
  this.table.el.addEventListener('mouseover', function(evt) {
    if(!self.manager.get('focusOnHover')) { return; }
    var node = evt.target;
    while(node._dcndx === undefined) {
      if(node.parentNode) { node = node.parentNode; }
      else { return; }
    }
    self.allRows[self.currentHoverNdx].hovered = false;
    self.allRows[node._dcndx].hovered = true;
    self.currentHoverNdx = node._dcndx;
    self.manager.set('hoverRow', self.allRows[node._dcndx]);
    self.table.updateData(self.getRows());

    // Drag actions
    if(evt.buttons) {
      self.allRows[node._dcndx].focused = !self.allRows[node._dcndx].focused;
    }
  });

  // Drag interaction: focus multiple rows
  this.table.el.addEventListener('mousedown', function(evt) {
    var node = evt.srcElement;
    while(node._dcndx === undefined) {
      if(node.parentNode) { node = node.parentNode; }
      else { return; }
    }
    self.dragStartNdx = node._dcndx;
  });
  this.table.el.addEventListener('mouseup', function(evt) {
    var node = evt.srcElement;
    while(node._dcndx === undefined) {
      if(node.parentNode) { node = node.parentNode; }
      else { return; }
    }
    self.focusRows(self.dragStartNdx, node._dcndx);
    // console.log('done dragging...', self.dragStartNdx, node._dcndx);
  });

  //
  this.focusRows = function(ndxA, ndxB) {
    var minNdx = Math.min(ndxA, ndxB),
        maxNdx = Math.max(ndxA, ndxB);

    // Single row selection - toggle
    if(minNdx === maxNdx) {
      self.allRows[minNdx].focused = !self.allRows[minNdx].focused;

    // Multiple row selection - more complicated logic???
    //   all selected -> unselect
    //   some selected -> select
    //   none selected -> select
    } else {
      for(var ndx = minNdx; ndx < maxNdx; ndx++) {
        if(!self.allRows[ndx].filtered) {
          self.allRows[ndx].focused = true; // !self.parsed.rows[ndx].focused;
        }
      }
    }
    self.allRows[self.currentHoverNdx].hovered = false;
    self.table.updateData(self.getRows());
  };
};

// Run data through pipeline if neccesary: sort -> filter -> group -> ...
Datacomb.prototype.getRows = function(opts) {
  var self = this;

  // Something changed, run data through pipeline...
  if(opts) {

    // sort...
    if(opts.sort) {
      this.allRows = _.sortBy(this.allRows, function(d) {
        return d._values[opts.sort.colNdx] * (opts.sort.desc ? -1 : 1);
      });
    }

    // groupBy...
    if(opts.groupByColNdx !== undefined) { this.groupByColNdx = opts.groupByColNdx; }
    if(this.groupByColNdx !== -1) {
      this.allRows = opts.sort ?
        _.sortByOrder(this.allRows,
          ['_values.'+this.groupByColNdx, '_values.'+opts.sort.colNdx],
          [true, opts.sort.desc]) :
        _.sortByOrder(this.allRows, ['_values.'+this.groupByColNdx], [true]);
    }

    // colorBy...
    if(opts.colorByColNdx !== undefined) { this.colorByColNdx = opts.colorByColNdx; }

    this.allRows.forEach(function(d, ndx) {
      d.ndx = ndx;
      d._colorNdx = self.colorByColNdx !== -1 ? d._discreteNdx[self.colorByColNdx] : null;
      d.hovered = false;
      d.filtered = true; });

    // filter...
    this.filters = opts.filters || this.filters;
    this.pipelinedRows = this.filters ? dataFilter(this.allRows, this.filters) : this.allRows;

    // `hide unfocused`
    if(opts.hideUnfocused || this.hideUnfocused) {
      this.pipelinedRows = this.pipelinedRows.filter(function(d) { return d.focused; });
      this.hideUnfocused = true;
    }
  }
  this.pipelinedRows.forEach(function(d) { d.filtered = false; });
  return this.pipelinedRows;
};

//
Datacomb.prototype.applySort = function(colNdx, desc) {
  this.table.updateData(this.getRows({
    sort: { colNdx: colNdx, desc: desc }
  }));
};

//
Datacomb.prototype.applyFilters = function(filters) {
  this.table.updateData(this.getRows({
    filters: filters
  }));
};

//
module.exports = Datacomb;
