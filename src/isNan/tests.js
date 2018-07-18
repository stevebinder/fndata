const isNan = require('./index');

module.exports = {
  'NaN is NaN': [
    true,
    () => isNan(NaN),
    () => isNaN(null * undefined),
  ],
  'non-NaN is not NaN': [
    false,
    () => isNaN(Infinity),
    () => isNaN(1 * 1),
  ],
};