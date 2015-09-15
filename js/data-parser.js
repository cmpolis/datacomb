//
//
// Pass row data through column definitions to build usable columns and rows

//
var _ = require('lodash'),
    jStat = require('jStat').jStat,
    d3 = require('d3');

// settings
var histogramBins = 12;

//
module.exports = function(rows, columns, labelAccessor) {
  labelAccessor = labelAccessor || function(d, ndx) { return ''+ndx; };
  if(_.isString(labelAccessor)) { labelAccessor = _.property(labelAccessor); }

  //
  var values, value, mean, median, sd;
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
      column.min = _.min(values);
      column.max = _.max(values);

      return _.extend(column, {
        ndx: ndx,
        mean: d3.mean(values),
        median: d3.median(values),
        sd: d3.deviation(values),
        histogram: jStat.histogram(values, histogramBins).map(function(count, binNdx) {
          return {
            count: count,
            colNdx: ndx,
            binMin: column.min + ((binNdx / histogramBins) * (column.max - column.min)),
            binMax: column.min + (((binNdx+1) / histogramBins) * (column.max - column.min))
          }
        }),
        widthFn: function(x) { return ((x - column.min) / (column.max - column.min)) * 100; }
      });
    }
  });

  //
  var value, widths, values, labels;
  var parsedRows = rows.map(function(row, ndx) {
    widths = []; values = []; labels = []; discreteNdx = [];

    parsedColumns.forEach(function(col, colNdx) {
      value = _.isString(col.accessor) ? row[col.accessor] : col.accessor(row, ndx);

      values[colNdx] = value;
      widths[colNdx] = (col.type === 'discrete') ? 0 : col.widthFn(value);
      labels[colNdx] = col.format ? col.format(value) : value;
      if(col.type === 'discrete') {
        discreteNdx[colNdx] = col.uniqValues.indexOf(value);
      }
    });
    return _.extend(row, {
      ndx: ndx,
      _values: values,
      _widths: widths,
      _labels: labels,
      _discreteNdx: discreteNdx,
      _rowLabel: labelAccessor(row, ndx),
      _colorNdx: ''
    });
  });

  return {
    columns: parsedColumns,
    rows: parsedRows
  };
};
