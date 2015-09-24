HTMLWidgets.widget({

  name: 'datacomb',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, opts, instance) {
    var _this = this;

    // TODO: error checking...
    this.dataset = HTMLWidgets.dataframeToD3(opts.data);
    this.columns = opts.columns.map(function(colName) {
      return {
        label: colName,
        accessor: colName,
        type: typeof(_this.dataset[0][colName]) == 'number' ? 'continuous' : 'discrete'
      }
    });
    console.log('this', this);
    console.log('cols', this.columns);
    console.log('dataset', this.dataset);

    this.datacomb = new Datacomb({
      el: el,
      data: this.dataset,
      columns: this.columns,
      labelAccessor: opts.rowLabel || function(d,ndx) { return ''+ndx; }
    });
  },

  resize: function(el, width, height, instance) {

  }

});
