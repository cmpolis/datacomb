//
//
// Filter array of parsed datacomb rows with filter array of objects

//
var _ = require('lodash');

//
module.exports = function(rows, filters) {
  //return rows.filter(function()
  return rows.filter(function(row) {
    return _.all(filters, function(filter, colNdx) {
      return filter.toggled ?
        (filter.toggled[row._values[colNdx]]) :
        (row._values[colNdx] >= filter.gt && row._values[colNdx] <= filter.lt);
    });
  });
};
