//
//
// Pass row data through column definitions to build usable columns

//
module.exports = function(rows, columns) {
  columns.forEach(function(column) {
    console.log('Building ' + column.label);
  });
};
