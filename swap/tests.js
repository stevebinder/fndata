import swap from './';

export default {
  'swap two letters': [
    'cat',
    () => swap('tac', 2, 0),
  ],
  'swap two items in an array': [
    ['a', 'b', 'c', 'd'],
    () => swap(['c', 'b', 'a', 'd'], 2, 0),
    () => swap(['d', 'b', 'c', 'a'], 0, 3),
    () => swap(['c', 'b', 'a', 'd'], 0, 2),
  ],
  'do nothing if indexes are outside the range of the target': [
    [1, 2, 3],
    () => swap([1, 2, 3]),
    () => swap([1, 2, 3], undefined, undefined),
    () => swap([1, 2, 3], null, undefined),
    () => swap([1, 2, 3], undefined, null),
    () => swap([1, 2, 3], null, null),
    () => swap([1, 2, 3], -1, 0),
    () => swap([1, 2, 3], 0, -1),
    () => swap([1, 2, 3], 9, 0),
    () => swap([1, 2, 3], 0, 9),
  ],
};