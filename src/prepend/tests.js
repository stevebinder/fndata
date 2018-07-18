const prepend = require('./index');

module.exports = {
  'prepend a value to a string': [
    'cat',
    () => prepend('at', 'c'),
  ],
  'prepend a list of values to a string': [
    'cat',
    () => prepend('t', ['c', 'a']),
  ],
  'prepend a value to a number': [
    123,
    () => prepend(23, 1),
  ],
  'prepend a list of values to a number': [
    123,
    () => prepend(3, [1, 2]),
  ],
  'prepend a value to an array': [
    [1, 2, 3],
    () => prepend([2, 3], 1),
  ],
  'prepend a list of values to an array': [
    [1, 2, 3, 4],
    () => prepend([3, 4], [1, 2]),
  ],
};