import includes from './';

export default {
  'array contains comparison value': [
    true,
    () => includes([1, 2, 3], 1),
    () => includes([true, false], false),
  ],
  'string or number contains value': [
    true,
    () => includes('cat', 'a'),
    () => includes('cat', 'at'),
    () => includes('123', '1'),
    () => includes(123, 1),
    () => includes(123, '1'),
    () => includes('123', 1),
  ],
  'object contains undefined key': [
    false,
    () => includes({ a: 1 }, 'b'),
    () => includes({ a: 1, b: undefined }, 'b'),
  ],
  'values match': [
    true,
    () => includes([true, 1, 'a'], 'a'),
  ],
};