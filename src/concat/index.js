const isArray = require('../isArray');
const reduce = require('../reduce');

module.exports = (...values) => reduce(
  values,
  (result, item) => isArray(item)
    ? ([...result, ...item])
    : [...result, item],
  [],
);