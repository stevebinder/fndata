const split = require('./');

module.exports = {
  'non string or number': [
    [],
    () => split(),
    () => split(true),
    () => split(false),
    () => split({}),
  ],
  'string': [
    ['c', 'a', 't'],
    () => split('cat'),
  ],
  'number': [
    [1, 2, 3],
    () => split(123),
  ],
};