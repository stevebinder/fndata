import none from './';

export default {
  'array with method that checks the value': [
    true,
    () => none([1, 2, 3], item => item > 3),
  ],
  'array with method that checks the index': [
    true,
    () => none([0, 1, 2], (item, index) => index > 2),
  ],
  'array with method that checks the original array': [
    true,
    () => none([0, 1, 2], (item, index, target) => target.length === 2),
  ],
  'check truthiness of each value': [
    true,
    () => none(0, NaN, false, undefined, null),
  ],
  'check truthiness of each value': [
    false,
    () => none(0, undefined, null, false, true),
  ],
};