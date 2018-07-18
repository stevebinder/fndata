const swap = require('./index');

module.exports = {
  'swap two letters': [
    'cat',
    () => swap('tac', 2, 0),
  ],
  'swap two items in an array': [
    ['a', 'b', 'c'],
    () => swap(['c', 'b', 'a'], 2, 0),
  ],
};