const append = require('./index');

module.exports = {
  'create a default array if no target provided': [
    [],
    () => append(),
  ],
  'add one item to the end of the array': [
    [1, 2, 3, 4],
    () => append([1, 2, 3], 4),
  ],
  'add mulitple items to the end of the array': [
    [1, 2, 3, 4, 5],
    () => append([1,2,3], 4, 5),
  ],
  'do not append undefined items to the end of the array': [
    [1, 2, 3, 4, null],
    () => append([1, 2, 3], undefined, 4, null),
  ],
};