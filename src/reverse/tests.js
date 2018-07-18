const reverse = require('./index');

module.exports = {
  'reverse a string': [
    'cat',
    () => reverse('tac'),
  ],
 'reverse a number': [
    123,
    () => reverse(321),
  ],
  'reverse an array': [
    [1, 2, 3],
    () => reverse([3, 2, 1]),
  ],
};