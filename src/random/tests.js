import random from './';

export default {
  'return a value between 0-1 when an empty value is passed in': [
    true,
    () => {
      for (let i = 0; i < 99; ++i) {
        const value = random();
        if (value < 0 || value >= 1) {
          return false;
        }
      }
      return true;
    },
  ],
  'return a random value from an array': [
    true,
    () => {
      for (let i = 0; i < 99; ++i) {
        const value = random([1, 2, 3]);
        if (value < 1 || value > 3) {
          return false;
        }
      }
      return true;
    },
  ],
  'return a random key from an object': [
    true,
    () => {
      const obj = { a: 1, b: 2, c: 3 };
      const value = random(obj);
      return value === 'a' || value === 'b' || value === 'c';
    },
  ],
  'return a random letter from a string': [
    true,
    () => {
      const value = random('abc');
      return value === 'a' || value === 'b' || value === 'c';
    },
  ],
  'return a random number from a number': [
    true,
    () => {
      const value = random(123);
      return value === 1 || value === 2 || value === 3;
    },
  ],
  'return the value if a non randomizable value is provided': [
    true,
    () => {
      const regEx = /ok/;
      return random(regEx) === random(regEx);
    },
  ],
};