//
//
// Demo of Datacomb interface

// Column definitions, meta data
var columns = [
  {
    label: 'Team',
    accessor: 'team',
    type: 'discrete'
  },
  {
    label: 'Pos',
    accessor: 'pos',
    type: 'discrete',
    sortOrder: 'PG SG SF PF C'.split(' ')
  },
  {
    label: 'Age',
    accessor: 'age'
  },
  {
    label: 'Points',
    accessor: 'pts'
  },
  {
    label: 'Minutes',
    accessor: 'mp'
  },
  {
    label: 'Pts / Min',
    accessor: function(d) { return d.pts / d.mp },
    format: function(val) { return val.toFixed(3) + 'pts/min'; },
  }
];

//
d3.csv('./data/nba-player-totals-20142015.csv')

  // Transform data, eg: type conversion, rename keys...
  .row(function(d) {
    return {
      name: d.Player,
      team: d.Tm,
      pos:  d.Pos,
      age:  +d.Age,
      pts:  +d.PTS,
      mp:   +d.MP
    }; })

  // Have cleaned data, build UI
  .get(function(error, rows) {

    // test with 2^n larger datasets...
    // for(var ndx = 0; ndx < 5; ndx++) { rows = _.flatten([_.cloneDeep(rows), _.cloneDeep(rows)]); }
    var dc = window.dc = new Datacomb({

      //
      el: document.getElementById('datacomb-target'),

      //
      data: rows,

      //
      columns: columns,

      //
      labelAccessor: 'name'

    });
  });
