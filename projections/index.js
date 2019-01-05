let d3 = require('d3-geo');
Object.assign(d3, require('d3-geo-projection'));

let R = 6378137.0; // radius of Earth in meters

const projections = module.exports;
const albersUsaTerritories = require('./albers-usa-w-territories');

const supported = [
  'albers',
  'albersUsa',
  'azimuthalEqualArea',
  'azimuthalEquidistant',
  'conicConformal',
  'conicEqualArea',
  'conicEquidistant',
  'equirectangular',
  'gnomonic',
  'mercator',
  'orthographic',
  'stereographic',
  'transverseMercator',
  'airy',
  'aitoff',
  'armadillo',
  'august',
  'baker',
  'berghaus',
  'boggs',
  'bonne',
  'bottomley',
  'bromley',
  'chamberlinAfrica',
  'collignon',
  'craig',
  'craster',
  'cylindricalEqualArea',
  'cylindricalStereographic',
  'eckert1',
  'eckert2',
  'eckert3',
  'eckert4',
  'eckert5',
  'eckert6',
  'eisenlohr',
  'fahey',
  'foucaut',
  'gilbert',
  'gingery',
  'ginzburg4',
  'ginzburg5',
  'ginzburg6',
  'ginzburg8',
  'ginzburg9',
  'gringorten',
  'guyou',
  'hammer',
  'hammerRetroazimuthal',
  'healpix',
  'hill',
  'homolosine',
  'interruptedBoggs',
  'interruptedHomolosine',
  'interruptedMollweide',
  'interruptedMollweideHemispheres',
  'interruptedSinuMollweide',
  'interruptedSinusoidal',
  'kavrayskiy7',
  'lagrange',
  'larrivee',
  'laskowski',
  'littrow',
  'loximuthal',
  'miller',
  'modifiedStereographicAlaska',
  'modifiedStereographicGs48',
  'modifiedStereographicGs50',
  'modifiedStereographicMiller',
  'modifiedStereographicLee',
  'mollweide',
  'mtFlatPolarParabolic',
  'mtFlatPolarQuartic',
  'mtFlatPolarSinusoidal',
  'naturalEarth',
  'nellHammer',
  'patterson',
  'polyconic',
  'polyhedralButterfly',
  'polyhedralCollignon',
  'polyhedralWaterman',
  'gringortenQuincuncial',
  'peirceQuincuncial',
  'pierceQuincuncial',
  'rectangularPolyconic',
  'robinson',
  'satellite',
  'sinuMollweide',
  'sinusoidal',
  'times',
  'twoPointAzimuthalUsa',
  'twoPointEquidistantUsa',
  'vanDerGrinten',
  'vanDerGrinten2',
  'vanDerGrinten3',
  'vanDerGrinten4',
  'wagner4',
  'wagner6',
  'wagner7',
  'wiechel',
  'winkel3'
];

for (const d3name in d3) {
  const match = /(?:geo)([A-Z])(.*)/.exec(d3name);
  if (!match) {
    continue;
  }
  const name = match[1].toLowerCase() + match[2];
  if (supported.indexOf(name) < 0) {
    continue;
  }
  projections[name] = d3[d3name]()
    .translate([0, 0])
    .scale(R);
}

//add albersUsaTerritories
projections.albersUsaTerritories = albersUsaTerritories;
