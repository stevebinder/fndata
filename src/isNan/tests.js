const isNan = require('./index');

module.exports = {
  'NaN is NaN': [
    true,
    () => isNan(NaN),
  ],
  'anything other than NaN is not NaN': [
    false,
    () => isNan(),
    () => isNan(null),
    () => isNan(1),
    () => isNan([]),
  ],
};