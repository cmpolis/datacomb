# Datacomb
An interactive tool for analyzing, exploring and *combing* through tabular datasets. *by [@ChrisPolis](https://twitter.com/ChrisPolis)*

Turn **your** data into: *[live demo](http://www.bytemuse.com/datacomb/demo/)*
![datacomb preview](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/dc2-demo.gif)

## Usage


#### As an `htmlwidget` in `R`

```R
devtools::install_github('cmpolis/datacomb', subdir='pkg');
library(datacomb);
Datacomb(iris)
```

#### In a browser, with JavaScript:

to build: ` $ npm install && npm run build`

```js
//
//
// Sample usage of Datacomb (see also: /demo/demo.js)

// Column definitions, meta data
var columns = [
  {
    label: 'Team',
    accessor: 'team',

    // columns that are not quantitative need `type` flag
    type: 'discrete'
  },
  {
   label: 'Pos',
   accessor: 'pos',
   type: 'discrete',
   sortOrder: 'PG SG SF PF C'.split(' ')
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

    // column defenitions can be functions
    accessor: function(d) { return d.pts / d.mp },

    // can define `format` function to change how text is displayed on the tbale
    format: function(val) { return val.toFixed(3) + 'pts/min'; },
  }
];

// init the interface
var myDatacomb = new Datacomb({

  //
  el: document.getElementById('datacomb-target'),

  // array of objects
  data: [ {name: 'Hank', team: 'Liverpool', points: 3 }, { ... }, ... ],

  //
  columns: columns,

  //
  labelAccessor: 'name'

});
```
## Catalog of Interactions

##### Hover over rows to reveal exact values
![hover](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/hover.gif)

##### Sort by column(s)
![sort](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/sort.gif)

##### Filter rows visually with a slider or by specifiying exact bounds
![filter](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/filter.gif)

##### Click and drag to select rows to focus
![focus](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/click-drag.gif)

##### Show only selected rows to analyze a subset
![focusonly](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/showfocused.gif)

##### View distribution data for each column
![histogram](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/histogram.gif)

##### View summary statistics for each column
![summary](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/summary.gif)

##### View relationships between columns by creating scatter plots of a column and all other columns
![scatter](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/scatter.gif)

##### Group rows by discrete dimensions
![group](https://raw.githubusercontent.com/cmpolis/datacomb/master/demo/interaction-gifs/group.gif)


## Contributing

Pull requests welcomed! However, please try to mention or ask about it as an issue to make sure what you are working on will be merged in and is not already in progress. 

```shell
$ npm install
$ npm run build
$ npm run serve
$ open http://localhost:5050/demo/
```


## Testing
` $ npm test`


## Resources

Blog post, demo of prototype/old version: http://www.bytemuse.com/post/data-comb-visualization/

R Package(CRAN!): https://github.com/mtennekes/tabplot

Table Lens Paper: https://www.cs.ubc.ca/~tmm/courses/cpsc533c-04-fall/readings/tablelens.pdf

Demo dataset sources:

* diamonds: https://vincentarelbundock.github.io/Rdatasets/datasets.html
* nba players: http://www.basketball-reference.com/

## Status, project todo, notes

* **[IN PROGRESS]** v1/prototype:
  * :thumbsup: project setup: can build, test, view in browser... 
  * :thumbsup: (https://github.com/cmpolis/smart-table-scroll) table row reuse *(minimize # of <.row> DOM elements)*
  * :thumbsup: table layout and properly sized bars
  * :thumbsup: hover interaction
  * :thumbsup: click interaction
  * :thumbsup: drag interaction
  * :thumbsup: filtering
  * :thumbsup: sorting
  * :thumbsup: scatter plots (canvas)
  * :thumbsup: histograms
  * :thumbsup: summary statistics
  * :thumbsup: grouping (by discrete dimensions)
  * :thumbsup: coloring (by discrete dimensions)
* v2
  * :x: expandable(full screen?) scatter plots
  * :x: regressions in scatter plots
  * :x: dynamic column addition, removal
  * :x: custom column widths
  * :x: functional column definitions from ui: eg: `areaCol: ${height} * ${width}`
  * :x: axis labels
  * :x: log scaling
  * :x: quantize columns (continuous dim -> discrete dim)
  * :x: illustrate filter response on histograms
  * :x: illustrate filter response on scatter plots
  * :x: close/expand groupings in table
  * :construction: keyboard shortcuts
* :construction: HTMLWidget/R package
* :x: Serializable table configuration format. JSON?
* :x: Natural language/DSL mode for table configuration, querying


### Released under the MIT License.
