import isEqual from '../isEqual';
import copy from './';

export default {
  'array': [
    true,
    () => {
      const original = [1, 2, 3];
      const clone = copy(original);
      return original !== clone && isEqual(original, clone);
    },
  ],
  'object': [
    true,
    () =>  {
      const original = { a: { b: 1 }, c: 2 };
      const clone = copy(original);
      return original !== clone
        && original.a !== clone.a
        && isEqual(original, clone);
    },
  ],
  'undefined, null, boolean, number, or string': [
    true,
    () => copy(undefined) === undefined,
    () => copy(null) === null,
    () => copy(true) === true,
    () => copy(1) === 1,
    () => copy('') === '',
  ],
  'function': [
    true,
    () => {
      const original = (a, b) => a + b;
      const clone = copy(original);
      return original !== clone && original(1, 2) === clone(1, 2);
    },
  ],
  'error': [
    true,
    () => {
      const original = new Error('ouch');
      const clone = copy(original);
      return original !== clone && original.message === clone.message;
    },
  ],
};