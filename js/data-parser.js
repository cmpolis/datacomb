//
//
// Pass row data through column definitions to build usable columns and rows

//
var _ = require('lodash'),
    d3 = require('d3');

//
module.exports = function(rows, columns) {

  //
  var values, min, max, mean, median, sd;
  var parsedColumns = columns.map(function(column, ndx) {

    // Collect values from each row
    values = _.map(rows, column.accessor);

    // Discrete column, eg: team name, position, letter grade
    if(column.type == 'discrete') {
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
  var parsedRows = rows;

  return {
    columns: parsedColumns,
    rows: parsedRows
  };
};
