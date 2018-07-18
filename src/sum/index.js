const isNumber = require('../isNumber');
const reduce = require('../reduce');

module.exports = (...values) => reduce(
  values,
  (sum, num) => isNumber(num) ? sum + num : sum,
  0,
);