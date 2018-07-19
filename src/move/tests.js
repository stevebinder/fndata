module.exports = {
  'move letters within a string': [
    'cat',
    () => move('cta', 1, 2),
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