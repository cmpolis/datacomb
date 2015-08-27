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
    type: 'discrete'
  },
  {
    label: 'Points',
    accessor: 'PTS'
  },
  {
    label: 'Pts / Min',
    accessor: function(d) { return d.PTS / d.MP },
    format: function(val) { return val.toFixed(3) + 'pts/min'; },
  }
];

//
d3.csv('../../data/nba-player-totals-20142015.csv')

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
    var dc = window.dc = new Datacomb.datacomb({

      //
      el: document.getElementById('dc-target'),

      //
      data: rows,

      //
      columns: columns

    });
  });
