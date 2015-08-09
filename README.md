## DataComb
An interactive tool for exploring large, tabular datasets.

### Status, project todo, notes

* v1/prototype:
  * :x: project setup: can build, test, view in browser... 
  * :x: table row reuse *(minimize # of <.row> DOM elements)*
  * :x: table layout and properly sized bars
  * :x: filtering
  * :x: sorting
  * :x: scatter plots - canvas or svg?
  * :x: histograms
  * :x: summary statistics
  * :x: grouping (by discrete dimensions)
  * :x: coloring (by discrete dimensions)
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
  
### Demo

### Usage

`[API definition goes here]`

```shell
$ npm install
$ npm run serve
$ open localhost:5050
```


### Testing


### Resources

Blog post, demo of prototype/old version: http://www.bytemuse.com/post/data-comb-visualization/

R Package(CRAN!): https://github.com/mtennekes/tabplot

Table Lens Paper: https://www.cs.ubc.ca/~tmm/courses/cpsc533c-04-fall/readings/tablelens.pdf



*Copyright (c) Chris Polis, 2015. All Rights Reserved.*
