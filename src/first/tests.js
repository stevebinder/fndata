import first from './';

export default {
  'return the first item of an array': [
    1,
    () => first([1, 2, 3]),
  ],
  'return the first char of a string': [
    'a',
    () => first('abc'),
  ],
  'return the first digit of a number': [
    1,
    () => first(123),
  ],
};