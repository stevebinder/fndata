import slice from './';

export default {
  'slice an array': [
    [3, 4],
    () => slice([0, 1, 2, 3, 4], 3, 5),
  ],
  'slice a string': [
    'bc',
    () => slice('abc', 1, 3),
  ],
  'slice with no end': [
    'bc',
    () => slice('abc', 1),
  ],
  'slice a string with bad start': [
    'a',
    () => slice('abc', -1, 1),
  ],
  'slice a string with bad end': [
    '',
    () => slice('abc', 0, -1),
  ],
  'slice a number': [
    234,
    () => slice(1234, 1, 4),
  ],
  'slice a bad type': [
    true,
    () => slice(true),
  ],
};