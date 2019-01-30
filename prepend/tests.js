import prepend from './';

export default {
  'prepend a value to a string': [
    'cat',
    () => prepend('at', 'c'),
  ],
  'prepend a value to a number': [
    123,
    () => prepend(23, 1),
  ],
  'prepend a value to an array': [
    [1, 2, 3],
    () => prepend([2, 3], 1),
  ],
  'do not prepend undefined to an array': [
    [1, 2],
    () => prepend([1, 2]),
  ],
  'return the original value for other types': [
    true,
    () => {
      const obj = {};
      return prepend(obj, 'ok') === obj;
    },
  ],
}