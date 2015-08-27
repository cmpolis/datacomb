//
//
// Demo of Datacomb interface

//
d3.csv('../../data/nba-player-totals-20142015.csv')

  // No data transformation, just pass through(for now)
  .row(function(d) { return d; })

  .get(function(error, rows) {
    var dc = window.dc = new Datacomb.datacomb({

      //
      data: rows,

      //
      el: document.getElementById('dc-target')

    });
  });
