import append from './';

export default {
  'append a value to a string': [
    'cat',
    () => append('ca', 't'),
  ],
  'append a value to a number': [
    123,
    () => append(12, 3),
  ],
  'append a value to an array': [
    [1, 2, 3],
    () => append([1, 2], 3),
  ],
  'do not prepend undefined to an array': [
    [1, 2],
    () => append([1, 2]),
  ],
  'return the original value for other types': [
    true,
    () => {
      const obj = {};
      return append(obj, 'ok') === obj;
    },
  ],
}