import toArray from './';

export default {
  'should convert objects to entries': [
    [{ key: 'a', value: 1 }, { key: 'b', value: 2 }],
    () => toArray({ a: 1, b: 2 }),
  ],
  'should convert a string to an arrray': [
    ['a', 'b', 'c'],
    () => toArray('abc'),
  ],
  'should convert a number to an arrray': [
    ['1', '2', '3'],
    () => toArray(123),
  ],
  'should convert anything that is not an array, object, string, or number to an empty array': [
    [],
    () => toArray(),
    () => toArray(null),
    () => toArray(() => {}),
  ],
};