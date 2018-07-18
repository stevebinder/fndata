const fill = require('./index');

module.exports = {
  'create an empty array if first argument is not a number': [
    [],
    () => fill(),
    () => fill(null),
    () => fill(true),
    () => fill(false),
    () => fill([]),
    () => fill({}),
    () => fill(() => {}),
    () => fill(/ok/),
  ],
  'create an array with 3 items': [
    [null, null, null],
    () => fill(3),
  ],
  'create an array with a method': [
    [0, 1, 2],
    () => fill(3, index => index),
  ],
  'create an array with a method that returns some null and undefined values': [
    [null, true],
    () => fill(3, index => {
      switch (index) {
        case 0:
          return undefined;
        case 1:
          return null;
        case 2:
          return true;
      }
    }),
  ],
};