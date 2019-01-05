var d3_composite = require('d3-composite-projections');
var d3 = require('d3-geo');
var R = 6378137.0; // radius of Earth in meters

var projection = d3_composite
  .geoAlbersUsaTerritories()
  .translate([0, 0])
  .scale(R);

module.exports = projection;
