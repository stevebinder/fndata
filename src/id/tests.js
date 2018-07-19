module.exports = {
  'should return a string': [
    true,
    () => {
      const str = id();
      return typeof str === 'string';
    },
  ],
};