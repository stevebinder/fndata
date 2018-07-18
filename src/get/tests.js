const get = require('./index');

module.exports = {
  'target not supplied': [
    undefined,
    () => get(),
  ],
  'get value using array of keys': [
    1,
    () => get(
      {
        a: {
          b: {
            c: 1,
          },
        }
      },
      ['a', 'b', 'c'],
    ),
  ],
  'get a value using a string path': [
    1,
    () => get(
      { a: {  b: { c: 1 } } },
      'a.b.c',
    ),
  ],
  'get a value that does not exist': [
    undefined,
    () => get({ a: true }, 'a.b'),
  ],
  'get a letter from a string using an index': [
    'a',
    () => get('cat', 1),
  ],
  'get a value from an array using a method to compare values': [
    1,
    () => get([1, 2, 3], item => item < 2),
  ],
  'get a value from an array using a method to check indexes': [
    1,
    () => get([1, 2, 3], (item, index) => index === 0),
  ],
};