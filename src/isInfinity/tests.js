const isInfinity = require('./index');

module.exports = {
  'Infinity equals Infinity': [
    true,
    () => isInfinity(Infinity),
  ],
  'non-Infinity does not equal Infinity': [
    false,
    () => isInfinity(NaN),
    () => isInfinity(0),
  ],
};