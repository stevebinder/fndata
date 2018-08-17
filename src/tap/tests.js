const tap = require('./');

module.exports = {
  'return the value': [
    'a',
    () => tap('a'),
    () => tap('a', 2),
  ],
  'return the number': [
    0,
    () => tap(0),
  ],
  'return the boolean': [
    false,
    () => tap(false),
  ],
};