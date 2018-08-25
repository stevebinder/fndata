const decode = require('./');

module.exports = {
  'decode a valid value': [
    [1, 2, 3],
    () => decode('[1,2,3]'),
  ],
  'decode an invalid value': [
    undefined,
    () => decode('[1x,2,3]'),
  ],
};