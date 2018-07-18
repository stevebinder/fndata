const toString = require('./index');

module.exports = {
  'should be a non-empty string': [
    'a',
    () => toString('a'),
  ],
  'should be an empty string': [
    '',
    () => toString(),
    () => toString(undefined),
    () => toString(null),
    () => toString(true),
    () => toString(false),
    () => toString(NaN),
    () => toString(Infinity),
    () => toString({}),
    () => toString([]),
    () => toString(() => {}),
    () => toString(/a/),
  ],
};