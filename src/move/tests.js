const move = require('./');

module.exports = {
  'return the value if not a string, number, or array': [
    true,
    () => move(true, 1, 1),
  ],
  'return the value if indexes match': [
    [1, 2, 3],
    () => move([1, 2, 3], 1, 1),
  ],
  'move letters within a string': [
    'cat',
    () => move('cta', 1, 2),
    () => move('cta', 2, 1),
  ],
  'move numbers within a number': [
    123,
    () => move(132, 1, 2),
    () => move(132, 2, 1),
  ],
  'move a value to the end of the array': [
    [1, 2, 3],
    () => move([3, 1, 2], 0, 2),
  ],
  'move a value to the beginning of the array': [
    [1, 2, 3],
    () => move([2, 3, 1], 2, 0),
  ],
  'move a value forwards within an array': [
    [1, 2, 3, 4],
    () => move([1, 3, 2, 4], 1, 2),
  ],
  'move a value backwards within an array': [
    [1, 2, 3, 4],
    () => move([1, 3, 2, 4], 2, 1),
  ],
}