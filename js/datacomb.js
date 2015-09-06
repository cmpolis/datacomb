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
var Manager = require('./manager');

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
  this.parsed = dataParser(this.data, this.columns, this.labelAccessor);

  //
  this.initManager();
  this.initTable();
};
//
//

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

  this.manager.observe('sortColNdx sortDesc', this.applySort, { init: false });
  this.manager.observe('filters.*', this.applyFilters, { init: false });
  this.manager.on('*.sort-by-col', function(evt, colNdx, descOrder) {
    self.applySort(colNdx, descOrder);
  });
  this.manager.observe('focusOnHover', function(shouldFocus) {
    if(!shouldFocus) {
      self.parsed.rows[self.currentHoverNdx].hovered = false;
      self.table.updateData(self.parsed.rows);
    }
  }, { init: false });
  this.manager.observe('hideUnfocused', function(shouldHide) {
    //
  }, { init: false });
  this.manager.on('focus-all', function(evt) {
    self.parsed.rows.forEach(function(r) { r.focused = true; });
    self.table.updateData(self.parsed.rows);
  });
  this.manager.on('unfocus-all', function(evt) {
    self.parsed.rows.forEach(function(r) { r.focused = false; });
    self.table.updateData(self.parsed.rows);
  });

  // Check for filter state changes
  this.manager.observe('filters.*', function() {
    console.log('should apply filter', this.get('filters'));
  }, { init: false });
};

//
//

//
Datacomb.prototype.initTable = function() {
  var self = this;

  this.table = new ScrollableTable({
    el: this.el.querySelector('.dc-table'),
    data: this.parsed.rows,
    availableNodes: 1000,
    heightFn: function(d) { return (d.hovered || d.focused) ? 17 : 4; },
    buildRow: function(d) {
      var node = document.createElement('div');
      var nodeContent = "<div class='dc-rlabel'><div class='dc-label'>"+d._rowLabel+"</div></div>";
      node.classList.add('dc-row');
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
      d.hovered ? el.setAttribute('dc-hover', '') : el.removeAttribute('dc-hover');
      (d.hovered || d.focused) ?
        el.setAttribute('dc-expand', '') :
        el.removeAttribute('dc-expand');

      for(var colNdx = 0; colNdx < self.parsed.columns.length; colNdx++) {
        if(self.parsed.columns[colNdx].type === 'discrete') {
          el.childNodes[colNdx + 1].childNodes[0].textContent = d._values[colNdx];

        } else {
          el.childNodes[colNdx+1].childNodes[0].style.width = ''+d._widths[colNdx]+'%';
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
    self.parsed.rows[self.currentHoverNdx].hovered = false;
    self.parsed.rows[node._dcndx].hovered = true;
    self.currentHoverNdx = node._dcndx;
    self.manager.set('hoverRow', self.parsed.rows[node._dcndx]);
    self.table.updateData(self.parsed.rows);

    // Drag actions
    if(evt.buttons) {
      self.parsed.rows[node._dcndx].focused = !self.parsed.rows[node._dcndx].focused;
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
      self.parsed.rows[minNdx].focused = !self.parsed.rows[minNdx].focused;

    // Multiple row selection - more complicated logic???
    //   all selected -> unselect
    //   some selected -> select
    //   none selected -> select
    } else {
      for(var ndx = minNdx; ndx < maxNdx; ndx++) {
        self.parsed.rows[ndx].focused = true; // !self.parsed.rows[ndx].focused;
      }
    }
    self.parsed.rows[self.currentHoverNdx].hovered = false;
    self.table.updateData(self.parsed.rows);
  };
};

//
Datacomb.prototype.applySort = function(columnNdx, sortDescending) {
  this.parsed.rows = _.sortBy(this.parsed.rows, function(d) { return d._values[columnNdx]; });
  if(sortDescending) { this.parsed.rows.reverse(); }
  this.parsed.rows.forEach(function(d,ndx) { d.ndx = ndx; d.hovered = false; });
  this.table.updateData(this.parsed.rows);
};

//
Datacomb.prototype.applyFilters = function(filters) { };

//
module.exports = Datacomb;
