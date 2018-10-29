import choose from './';

export default {
  'return the default value if no matching value is found': [
    4,
    () => choose(
      1,
      [[2], [3]],
      4,
    ),
  ],
  'return the matching value': [
    2,
    () => choose(
      1,
      [
        [0, 1],
        [1, 2],
        [2, 3],
      ],
    ),
    () => choose(
      1,
      [
        [value => value === 0, 1],
        [value => value === 1, 2],
        [value => value === 2, 3],
      ],
    ),
  ],
};