const isObject = require('./index');

module.exports = {
  'return true for undefined': [
    true,
    () => isObject(),
    () => isObject(undefined),
  ],
  'return false for non-undefined': [
    false,
    () => isObject(null),
    () => isObject(true),
    () => isObject(false),
    () => isObject(0),
    () => isObject(1),
    () => isObject(''),
    () => isObject('a'),
    () => isObject([]),
    () => isObject(() => {}),
    () => isObject(/a/),
  ],
};