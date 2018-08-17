const all = require('./');

module.exports = {
  'array with method that checks the value': [
    true,
    () => all([1, 2, 3], item => item > 0),
  ],
  'array with method that checks the index': [
    true,
    () => all([0, 1, 2], (item, index) => index > -1),
  ],
  'array with method that checks the original array': [
    true,
    () => all([0, 1, 2], (item, index, target) => target.length === 3),
  ],
  'check truthiness of each value': [
    true,
    () => all(1, true, {}, [], 'a'),
  ],
  'check truthiness of each value': [
    false,
    () => all(true, 'a', false),
  ],
};