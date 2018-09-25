import compose from './';

export default {
  'return a method that curries along the given value': [
    10,
    () => {
      const method = compose(
        value => value * 20,
        value => value - 11,
        value => value + 1,
      );
      return method(1);
    },
  ],
};