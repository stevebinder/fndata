import all from './';

export default {
  'array with method that checks the value': [
    true,
    () => all([1, 2, 3], item => item > 0),
  ],
  'array with method that checks the index': [
    true,
    () => all([0, 1, 2], (item, index) => index > -1),
  ],
  'array with method that checks the original array': [
    true,
    () => all([0, 1, 2], (item, index, target) => target.length === 3),
  ],
  'all values are truthy': [
    true,
    () => all(1, true, {}, [], 'a'),
    () => !all(true, 'a', false),
  ],
};