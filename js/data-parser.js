//
//
// Pass row data through column definitions to build usable columns and rows

//
var _ = require('lodash');

//
module.exports = function(rows, columns) {

  //
  var values;
  var parsedColumns = columns.map(function(column, ndx) {

    // Collect values from each row
    values = _.map(rows, column.accessor);

    // Discrete column, eg: team name, position, letter grade
    if(column.type == 'discrete') {
      return _.extend(column, {
        ndx: ndx,
        uniqValues: _.uniq(values).sort()
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
