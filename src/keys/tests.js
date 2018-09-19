import keys from './';

export default {
  'extract keys from an object': [
    ['a', 'b', 'c'],
    () => keys({ a: 1, b: 2, c: 3 }),
  ],
  'return an empty array for any non-object': [
    [],
    () => keys('cat'),
    () => keys(),
    () => keys(true),
    () => keys([]),
  ],
};