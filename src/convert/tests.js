import convert from './';

export default {
  'return the original value if no converter is provided': [
    1,
    () => convert(1),
  ],
  'return the original value if no matching value is found': [
    1,
    () => convert(1, [[0], [2]]),
  ],
  'return the matching value if value is not a function': [
    2,
    () => convert(
      1,
      [0, 1],
      [1, 2],
      [2, 3],
    ),
  ],
  'return the matching value if value is a function': [
    2,
    () => convert(
      1,
      [value => value === 0, 1],
      [value => value === 1, 2],
      [value => value === 2, 3],
    ),
  ],
  'return the result of the matching converting method': [
    4,
    () => convert(
      2,
      [0, value => value * 0],
      [1, value => value * 1],
      [2, value => value * 2],
    ),
  ],
};