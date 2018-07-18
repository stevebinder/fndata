const noop = require('./index');

module.exports = {
  'should return undefined': [
    undefined,
    () => noop(),
  ],
  'should be equal': [
    true,
    () => noop === noop,
  ],
};