const curry = require('./');

module.exports = {
  'pass a value along to each method': [
    10,
    () => curry(
      1,
      value => value * 20,
      value => value - 11,
      value => value + 1,
    ),
  ],
};