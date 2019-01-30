import get from './';

export default {
  'target not supplied': [
    undefined,
    () => get(),
    () => get(null),
  ],
  'letter from a string': [
    'a',
    () => get('cat', 1),
  ],
  'number from a number': [
    2,
    () => get(123, 1),
  ],
  'array of word keys': [
    1,
    () => get(
      { a: { b: { c: 1 } } },
      ['a', 'b', 'c'],
    ),
  ],
  'array of number keys': [
    1,
    () => get(
      [[[null, 1]]],
      [0, 0, 1],
    ),
  ],
  'array of word and number keys': [
    1,
    () => get(
      { a: {  b: [null, null, { b: [1] }] } },
      ['a', 'b', 2, 'b', 0],
    ),
  ],
  'string path of word keys': [
    1,
    () => get(
      { a: {  b: { c: 1 } } },
      'a.b.c',
    ),
  ],
  'string path of number keys': [
    1,
    () => get(
      [[[null, 1]]],
      '[0][0][1]',
    ),
  ],
  'string path of word and number keys': [
    1,
    () => get(
      { a: {  b: [null, null, { b: [1] }] } },
      'a.b[2].b[0]',
    ),
  ],
  'path does not exist': [
    undefined,
    () => get({ a: true }, 'a.b'),
  ],
  'use a method to compare values': [
    1,
    () => get([1, 2, 3], item => item < 2),
  ],
  'use a method to check indexes': [
    1,
    () => get([1, 2, 3], (item, index) => index === 0),
  ],
};