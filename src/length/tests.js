import length from './';

export default {
  'should equal 0 if value is falsey': [
    0,
    () => length(),
    () => length(null),
    () => length(false),
  ],
  'should equal the object length if it is a number': [
    1,
    () => length([true]),
    ()= > length({ length: 1 }),
  ],
  'should equal the number of entries in the object': [
    2,
    () => length({ a: 1, b: 2 }),
  ],
};