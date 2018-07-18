const invert = require('./index');

module.exports = {
  'should invert truthy to false': [
    false,
    () => invert(true),
    () => invert(1),
    () => invert([]),
    () => invert('ok'),
    () => invert(() => {}),
    () => invert({}),
  ],
  'should invert falsey to true': [
    true,
    () => invert(false),
    () => invert(),
    () => invert(undefined),
    () => invert(null),
    () => invert(0),
    () => invert(''),
  ],
};