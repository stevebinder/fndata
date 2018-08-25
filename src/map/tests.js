const map = require('./index');

module.exports = {
  'return an empty array for a non-mappable item': [
    [],
    () => map(),
    () => map(null),
    () => map(1),
    () => map(true),
    () => map(() => {}),
  ],
  'iterate array values and use the value': [
    [2, 4, 6],
    () => map(
      [1, 2, 3],
      item => item * 2,
    ),
  ],
  'iterate array values and use the index': [
    [0, 1, 2],
    () => map(
      [0, 0, 0],
      (item, index) => index,
    ),
  ],
  'iterate array values and use the target': [
    [3, 3, 3],
    () => map(
      [0, 0, 0],
      (item, index, target) => target.length,
    ),
  ],
  'iterate through a string and use the value': [
    '246',
    () => map(
      '123',
      item => item * 2,
    ),
  ],
  'iterate through a string and use the index': [
    '012',
    () => map(
      '000',
      (item, index) => index,
    ),
  ],
  'iterate through a string and use the target': [
    '333',
    () => map(
      '000',
      (item, index, target) => target.length,
    ),
  ],
  'iterate through an object and use the value': [
    ['a1', 'b2'],
    () => map(
      { a: 1, b: 2 },
      ({ key, value }) => `${key}${value}`,
    ),
  ],
  'iterate through an array and use a property or path': [
    [1, 2],
    () => map([{ a: 1 }, { a: 2 }], 'a'),
  ],
};