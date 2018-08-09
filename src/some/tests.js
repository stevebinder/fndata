const some = require('./');

module.exports = {
  'array with method that checks the value': [
    true,
    () => some([0, 1, 2], item => item > 1),
  ],
  'array with method that checks the index': [
    true,
    () => some([0, 1, 2], (item, index) => index > 1),
  ],
  'array with method that checks the original array': [
    true,
    () => some([0, 1, 2], (item, index, target) => target.length === 3),
  ],
  'check truthiness of all values': [
    true,
    () => some(0, 0, null, undefined, 1),
  ],
  'check truthiness of all values': [
    false,
    () => some(0, 0, null, undefined, NaN),
  ],
};