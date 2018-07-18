const set = require('./index');

module.exports = {
  'set nothing': [
    undefined,
    () => set(),
  ],
  'set a string within a string using a value to compare': [
    'cat',
    () => set(
      'car',
      'r',
      't',
    ),
  ],
  'set multiple values within a string using a function to compare values': [
    'aaa',
    () => set(
      'abc',
      item => item !== 'a',
      'a',
    ),
  ],
  'set multiple values within a string using a function to compare indexes': [
    'aaa',
    () => set(
      'abc',
      (item, index) => index > 0,
      'a',
    ),
  ],
  'set a value within an array using an index': [
    [1, 2, 4],
    () => set(
      [1, 2, 3],
      2,
      4,
    ),
  ],
  'set a value within a string using an index': [
    'cat',
    () => set(
      'car',
      2,
      't',
    ),
  ],
  'set a value within a number using an index': [
    124,
    () => set(
      123,
      2,
      4,
    ),
  ],
  'set values using a setter function that uses the value': [
    [2, 4, 6],
    () => set(
      [1, 2, 3],
      () => true,
      item => item * 2,
    ),
  ],
  'set values using a setter function that uses the index': [
    [0, 1, 2],
    () => set(
      [1, 1, 1],
      () => true,
      (item, index) => index,
    ),
  ],
  'set an object key to value using array of keys': [
    { a: { b: { c: 2 } } },
    () => set(
      { a: { b: { c: 1 } } },
      ['a', 'b', 'c'],
      2,
    ),
  ],
  'set an object key to value using a string path': [
    { a: { b: { c: 2 } } },
    () => set(
      { a: { b: { c: 1 } } },
      'a.b.c',
      2,
    ),
  ],
  'set an object key to value using a string path and a setter function': [
    { a: { b: { c: 2 } } },
    () => set(
      { a: { b: { c: 1 } } },
      'a.b.c',
      item => item * 2,
    ),
  ],
  'set an object key that does not exist to value using a string path': [
    { a: { b: { c: 1 } } },
    () => set(
      {},
      'a.b.c',
      1,
    ),
    () => set(
      { a: 1 },
      'a.b.c',
      1,
    ),
    () => set(
      { a: { b: {} } },
      'a.b.c',
      1,
    ),
  ],
  'set a deep path using arrays and indexes': [
    [{ a: { b: 2 } }],
    () => set(
      [{ a: { b: 1 } }],
      [0, 'a', 'b'],
      2,
    ),
  ],
};