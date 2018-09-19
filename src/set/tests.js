import set from './';

export default {
  'do nothing': [
    undefined,
    () => set(),
  ],
  'string within a string by value': [
    'cat',
    () => set(
      'car',
      'r',
      't',
    ),
  ],
  'string within a string by index': [
    'cat',
    () => set(
      'car',
      2,
      't',
    ),
  ],
  'string within a string by function': [
    'aaa',
    () => set(
      'abc',
      item => item !== 'a',
      'a',
    ),
    () => set(
      'abc',
      (item, index) => index > 0,
      'a',
    ),
  ],
  'number within a number by value': [
    1233,
    () => set(1244, 4, 3),
  ],
  'number within a number by function': [
    111,
    () => set(
      122,
      item => item !== 1,
      1,
    ),
    () => set(
      122,
      (item, index) => index > 0,
      1,
    ),
  ],
  'value within an array by index': [
    [1, 2, 3],
    () => set(
      [1, 2, 4],
      2,
      3,
    ),
  ],
  'set a value within an array using a value': [
    [null, 1, 1],
    () => set(
      [null, undefined, undefined],
      undefined,
      1,
    ),
  ],
  'existing object path using value': [
    { a: { b: { c: 2 } } },
    () => set(
      { a: { b: { c: 1 } } },
      ['a', 'b', 'c'],
      2,
    ),
    () => set(
      { a: { b: { c: 1 } } },
      'a.b.c',
      2,
    ),
    () => set(
      { a: { b: { c: 1 } } },
      '[\'a\'].b.c',
      2,
    ),
    () => set(
      { a: { b: { c: 1 } } },
      '["a"]["b"]["c"]',
      2,
    ),
  ],
  'existing object path using function': [
    { a: { b: { c: 2 } } },
    () => set(
      { a: { b: { c: 1 } } },
      ['a', 'b', 'c'],
      value => value * 2,
    ),
  ],
  'existing array path': [
    [1, 2, 3, [1]],
    () => set(
      [1, 2, 4, [1]],
      [2],
      3,
    ),
    () => set(
      [1, 2, 3, [2]],
      [3, 0],
      1,
    ),
    () => set(
      [1, 2, 3, [2]],
      '[3][0]',
      1,
    ),
  ],
  'complex path': [
    [
      1,
      2,
      {
        a: [
          { b: 1, c: 2 },
          3,
        ],
      },
      4,
    ],
    () => set(
      [
        1,
        2,
        {
          a: [
            { b: 1, c: 1 },
            3,
          ],
        },
        4,
      ],
      [2, 'a', 0, 'c'],
      2,
    ),
  ],
  'non-existant object-only path': [
    { a: { b: { c: 1 } } },
    () => set(
      { a: 1 },
      'a.b.c',
      1,
    ),
  ],
  'non-existant array-only path': [
    [[[1]]],
    () => set(
      { a: 1 },
      [0, 0, 0],
      1,
    ),
    () => set(
      undefined,
      [0, 0, 0],
      1,
    ),
  ],
  'non-existant mixed path': [
    { a: { b: [1] } },
    () => set(
      { a: [] },
      ['a', 'b', 0],
      1,
    ),
    () => set(
      undefined,
      ['a', 'b', 0],
      1,
    ),
  ],
  'update an object in an array when it matches a shape': [
    [
      { name: 'bob', age: 2 },
      { name: 'sam', age: 3 },
    ],
    () => set(
      [
        { name: 'bob', age: 1 },
        { name: 'sam', age: 3 },
      ],
      { age: 1 },
      item => ({ ...item, age: 2 }),
    ),
    () => set(
      [
        { name: 'bob', age: 1 },
        { name: 'sam', age: 3 },
      ],
      { age: 1 },
      { name: 'bob', age: 2 },
    ),
  ],
  'unset an object key': [
    { a: 1 },
    () => set({ a: 1, b: 2 }, 'b'),
  ],
};