const keep = require('./index');

module.exports = {
  'use a function to check each item': [
    [1, 2, 3],
    () => keep(
      [1, 2, 3, 4],
      item => item < 4,
    ),
  ],
  'use a function to check each index': [
    [2],
    () => keep(
      [1, 2, 3, 4],
      (item, index) => index === 1,
    ),
  ],
  'use a shape to compare each item': [
    [
      { name: 'alex', age: 2 },
      { name: 'pete', age: 2 },
    ],
    () => keep(
      [
        { name: 'alex', age: 2 },
        { name: 'bob', age: 4 },
        { name: 'pete', age: 2 },
      ],
      { age: 2 },
    ),
  ],
  'remove any non-undefined items when the keeper is undefined': [
    [undefined, undefined],
    () => keep([undefined, null, undefined, 1]),
  ],
  'use a value to compare each item': [
    [2],
    () => keep(
      [1, 2, 3],
      2,
    ),
  ],
  'use a list of values to check each item': [
    [1, 2, 3],
    () => keep(
      [1, 2, 3, 4],
      [1, 2, 3],
    ),
  ],
  'use a list of shapes to check each item': [
    [
      { name: 'alex', age: 2 },
      { name: 'pete', age: 2 },
    ],
    () => keep(
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
};