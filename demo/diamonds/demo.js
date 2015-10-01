//
//
// Demo of Datacomb interface

// Column definitions, meta data
var columns = [
  {
    label: 'carat',
    accessor: 'carat',
  },
  {
    label: 'cut',
    accessor: 'cut',
    type: 'discrete',
  },
  {
    label: 'clarity',
    accessor: 'clarity',
    type: 'discrete',
  },
  {
    label: 'x',
    accessor: 'x'
  },
  {
    label: 'y',
    accessor: 'y'
  },
  {
    label: 'z',
    accessor: 'z'
  },
  {
    label: 'vol',
    accessor: function(d) { return d.x * d.y * d.z; },
    format: function(d) { return d.toFixed(1); }
  },
];

//
d3.csv('../data/diamonds.csv')

  // Transform data, eg: type conversion, rename keys...
  .row(function(d, ndx) {
    return {
      ndx: '#' + ndx,
      carat: +d.carat,
      cut: d.cut,
      clarity: d.clarity,
      x: +d.x,
      y: +d.y,
      z: +d.z
    }; })

  // Have cleaned data, build UI
  .get(function(error, rows) {

    // test with 2^n larger datasets...
    console.log(rows.length);
    var dc = window.dc = new Datacomb({

      //
      el: document.getElementById('datacomb-target'),

      //
      data: rows,

      //
      columns: columns,

      //
      labelAccessor: 'ndx'

    });
  });
