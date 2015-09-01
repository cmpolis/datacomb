//
//
// Pass row data through column definitions to build usable columns and rows

//
var _ = require('lodash'),
    d3 = require('d3');

//
module.exports = function(rows, columns, labelAccessor) {
  labelAccessor = labelAccessor || function(d, ndx) { return ''+ndx; };
  if(_.isString(labelAccessor)) { labelAccessor = _.property(labelAccessor); }

  //
  var values, value, min, max, mean, median, sd;
  var parsedColumns = columns.map(function(column, ndx) {

    // Collect values from each row
    values = _.map(rows, column.accessor);

    // Discrete column, eg: team name, position, letter grade
    if(column.type === 'discrete') {
      return _.extend(column, {
        ndx: ndx,
        uniqValues: _.uniq(values).sort()
      });


    // Continuous column, numeric value, eg: points, age, etc...
    } else {
      min = _.min(values);
      max = _.max(values);

      return _.extend(column, {
        ndx: ndx,
        min: min,
        max: max,
        mean: d3.mean(values),
        median: d3.median(values),
        sd: d3.deviation(values),
        widthFn: function(x) { return ((x - min) / (max - min)) * 100; }
      });

    }
  });

  //
  var value, widths, values, labels;
  var parsedRows = rows.map(function(row, ndx) {
    widths = []; values = []; labels = [];

    parsedColumns.forEach(function(col, colNdx) {
      value = _.isString(col.accessor) ? row[col.accessor] : col.accessor(row, ndx);

      values[colNdx] = value;
      widths[colNdx] = (col.type === 'discrete') ? 0 : col.widthFn(value);
      labels[colNdx] = col.format ? col.format(value) : value;
    });
    return _.extend(row, {
      ndx: ndx,
      _values: values,
      _widths: widths,
      _labels: labels,
      _rowLabel: labelAccessor(row, ndx)
    });
  });

  return {
    columns: parsedColumns,
    rows: parsedRows
  };
};
