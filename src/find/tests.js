import find from './';

export default {
  'array contains comparison value': [
    1,
    () => find([1, 2, 3], 1),
  ],
  'string or number contains value': [
    'a',
    () => find('cat', 'a'),
  ],
  'compare values with a function': [
    3,
    () => find([1, 2, 3, 4], item => item > 2),
  ],
  'compare values with a function': [
    4,
    () => find([1, 2, 3, 4], (item, index) => index > 2),
  ],
};