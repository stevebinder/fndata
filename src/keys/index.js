const curry = require('../curry');
const entries = require('../entries');
const map = require('../map');

module.exports = value => curry(
  value,
  entries,
  [map, item => item.key],
);
