import last from './';

export default {
  'return the last item of an array': [
    3,
    () => last([1, 2, 3]),
  ],
  'return the last char of a string': [
    'c',
    () => last('abc'),
  ],
  'return the last digit of a number': [
    3,
    () => last(123),
  ],
};