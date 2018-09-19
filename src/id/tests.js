import id from './';

export default {
  'should return a string': [
    true,
    () => {
      const str = id();
      return typeof str === 'string';
    },
  ],
};