const loop = require('./index');

module.exports = {
  'should not fail if item is not iterable': [
    undefined,
    () => loop(),
    () => loop(/a/),
    () => loop(NaN),
  ],
  'should not fail if no method is provided': [
    undefined,
    () => loop([]),
  ],
  'should not return a value': [
    undefined,
    () => loop([1, 2, 3]),
  ],
  'should loop through an array': [
    [1, 2, 3],
    () => {
      let value = [];
      loop([1, 2, 3], item => value.push(item));
      return value;
    },
  ],
  'should loop through an array and provide indexes': [
    [0, 1, 2],
    () => {
      let value = [];
      loop([1, 1, 1], (item, index) => value.push(index));
      return value;
    },
  ],
  'should loop through a string': [
    ['a', 'b', 'c'],
    () => {
      let value = [];
      loop('abc', item => value.push(item));
      return value;
    },
  ],
  'should loop through a number': [
    [1, 2, 3],
    () => {
      let value = [];
      loop(123, item => value.push(item));
      return value;
    },
  ],
  'should loop through an object': [
    ['a', 'b', 'c'],
    () => {
      let value = [];
      loop(
        {
          a: 1,
          b: 2,
          c: 3,
        },
        item => value.push(item.key),
      );
      return value;
    },
  ],
};