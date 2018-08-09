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
  'pass a value along to each method': [
    10,
    () => curry(
      1,
      value => value * 20,
      value => value - 11,
      value => value + 1,
    ),
  ],
  'pass a value along to each method using the array syntax': [
    10,
    () => {
      const add = (value, inc) => value + inc;
      return curry(
        1,
        [add, 2],
        [add, 3],
        [add, 4],
      );
    },
  ],
};