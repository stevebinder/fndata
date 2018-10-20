import convert from './';

export default {
  'return the default value if no matching value is found': [
    4,
    () => convert(
      1,
      [[2], [3]],
      4,
    ),
    () => convert(
      1,
      [[2], [3]],
      value => value * 4,
    ),
  ],
  'return the matching value ': [
    2,
    () => convert(
      1,
      [
        [0, 1],
        [1, 2],
        [2, 3],
      ],
    ),
    () => convert(
      1,
      [
        [value => value === 0, 1],
        [value => value === 1, 2],
        [value => value === 2, 3],
      ],
    ),
  ],
  'return the result of the matching converting method': [
    4,
    () => convert(
      2,
      [
        [0, value => value * 0],
        [1, value => value * 1],
        [2, value => value * 2],
      ],
    ),
  ],
};