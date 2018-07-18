const isNumber = require('./index');

module.exports = {
  'is a number': [
    true,
    () => isNumber(0),
    () => isNumber(1),
  ],
  'is not a number': [
    false,
    () => isNumber(),
    () => isNumber(NaN),
    () => isNumber(undefined),
    () => isNumber(null),
    () => isNumber(true),
    () => isNumber(false),
    () => isNumber('a'),
    () => isNumber({}),
    () => isNumber([]),
    () => isNumber(/a/),
  ],
};