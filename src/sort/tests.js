const sort = require('./');

module.exports = {
  'array in ascending order': [
    [0, 1, 2],
    () => sort([2, 0, 1]),
  ],
  'array with custom method': [
    [2, 1, 0],
    () => sort([2, 0, 1], (a, b) => b - a),
  ],
  'string in ascending order': [
    'abc',
    () => sort('bca'),
  ],
  'string with custom method': [
    'aab',
    () => sort('aba', (a, b) => a === 'a' ? -1 : 1),
  ],
  'number in ascending order': [
    123,
    () => sort(231),
  ],
  'number with a custom method': [
    321,
    () => sort(231, (a, b) => b - a),
  ],
};