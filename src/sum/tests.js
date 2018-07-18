const sum = require('./index');

module.exports = {
  'sum up numbers': [
    3,
    () => sum(1, 1, 1),
  ],
  'sum up mixed values and only use the number types': [
    3,
    () => sum(true, 1, false, 1, {}, [], Infinity, NaN, 1),
  ],
};