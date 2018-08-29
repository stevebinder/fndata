const reject = require('./index');

module.exports = {
  'use a function to check each item': [
    [1, 2, 3],
    () => reject(
      [1, 2, 3, 4],
      item => item >= 4,
    ),
  ],
  'use a function to check each index': [
    [2],
    () => reject(
      [1, 2, 3, 4],
      (item, index) => index !== 1,
    ),
  ],
  'use a shape to compare each item': [
    [
      { name: 'bob', age: 4 },
    ],
    () => reject(
      [
        { name: 'alex', age: 2 },
        { name: 'bob', age: 4 },
        { name: 'pete', age: 2 },
      ],
      { age: 2 },
    ),
  ],
  'remove any undefined items when the rejecter is undefined': [
    [null, 1],
    () => reject([undefined, null, undefined, 1]),
  ],
  'use a value to compare each item': [
    [1, 3],
    () => reject(
      [1, 2, 3],
      2,
    ),
  ],
  'use a list of values to check each item': [
    [4],
    () => reject(
      [1, 2, 3, 4],
      [1, 2, 3],
    ),
  ],
  'use a list of shapes to check each item': [
    [
      { name: 'bob', age: 4 },
    ],
    () => reject(
      [
        { name: 'alex', age: 2 },
        { name: 'bob', age: 4 },
        { name: 'pete', age: 2 },
      ],
      [
        { name: 'alex' },
        { age: 2 },
      ],
    ),
  ],
  'check each key on an object': [
    { a: 1, c: 3 },
    () => reject({ a: 1, b: 2, c: 3 }, ({ key }) => key === 'b'),
  ],
  'check each value on an object': [
    { a: 1, c: 3 },
    () => reject({ a: 1, b: 2, c: 3 }, ({ value }) => value === 2),
  ],
}