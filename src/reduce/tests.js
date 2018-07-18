const reduce = require('./index');

module.exports = {
  'reduce a number': [
    6,
    () => reduce(
      123,
      (result, item) => result + item,
      0,
    ),
  ],
  'reduce a string': [
    'cat',
    () => reduce(
      'cat',
      (result, item) => `${result}${item}`,
      '',
    ),
  ],
  'reduce an array': [
    'abc',
    () => reduce(
      ['a', 'b', 'c'],
      (result, item) => `${result}${item}`,
      '',
    ),
  ],
  'reduce an object': [
    'a1b2c3',
    () => reduce(
      {
        a: '1',
        b: '2',
        c: '3',
      },
      (result, item) => `${result}${item.key}${item.value}`,
      '',
    ),
  ],
  'reduce using indexes': [
    3,
    () => reduce(
      [true, true, true],
      (result, item, index) => result + index,
      0,
    ),
  ],
};