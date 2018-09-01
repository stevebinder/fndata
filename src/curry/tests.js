const curry = require('./');

module.exports = {
  'pass a value along to each method': [
    7,
    () => {
      const add = (value, inc) => value + inc;
      return curry(
        1,
        result => result + 1,
        result => result + 2,
        [add, 3],
      );
    },
  ],
  'return a promise if any method returns a promise': [
    true,
    () => {
      const value = curry(
        1,
        result => result + 1,
        result => new Promise(() => {}),
      );
      return value instanceof Promise;
    },
  ],
};