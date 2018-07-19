const toBoolean = require('./index');

module.exports = {
  'truthy values': [
    true,
    () => toBoolean(1),
    () => toBoolean('1'),
    () => toBoolean({}),
    () => toBoolean([]),
    () => toBoolean(() => {}),
  ],
  'falsey values': [
    false,
    () => toBoolean(undefined),
    () => toBoolean(null),
    () => toBoolean(false),
    () => toBoolean(0),
    () => toBoolean(''),
  ],
};