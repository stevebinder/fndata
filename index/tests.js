import index from './';

export default {
  'should return -1 if not found': [
    -1,
    () => index([0, 1, 2], 3),
    () => index('cat', 'x'),
  ],
  'should return a number representing the index': [
    1,
    () => index([0, 1, 2], 1),
    () => index('cat', 'a'),
  ],
};