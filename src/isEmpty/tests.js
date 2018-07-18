const isEmpty = require('./index');

module.exports = {
  'null or undefined values': [
    true,
    () => isEmpty(),
    () => isEmpty(undefined),
    () => isEmpty(null),
  ],
  'anything but null or undefined': [
    false,
    () => isEmpty(true),
    () => isEmpty(false),
    () => isEmpty(0),
    () => isEmpty(1),
    () => isEmpty('a'),
    () => isEmpty({}),
    () => isEmpty([]),
    () => isEmpty(() => {}),
    () => isEmpty(/a/),
  ],
};