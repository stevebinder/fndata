const invert = require('./index');

module.exports = {
  'invert truthy': [
    false,
    () => invert(true),
    () => invert(1),
    () => invert([]),
    () => invert('ok'),
    () => invert(() => {}),
    () => invert({}),
  ],
  'invert falsey': [
    true,
    () => invert(false),
    () => invert(),
    () => invert(undefined),
    () => invert(null),
    () => invert(0),
    () => invert(''),
  ],
};