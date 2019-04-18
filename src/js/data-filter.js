//
//
// Filter array of parsed datacomb rows with filter array of objects
//  see tests for data, filter formats

//
var _ = require('lodash');

//
module.exports = function(rows, filters) {
  return rows.filter(function(row) {
    return _.every(filters, function(filter, colNdx) {
      return filter.toggled ?
        (filter.toggled[row._values[colNdx]]) :
        (row._values[colNdx] >= filter.gt && row._values[colNdx] <= filter.lt);
    });
  });
};
