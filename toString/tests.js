import toString from './';

export default {
  'convert a string': [
    'a',
    () => toString('a'),
  ],
  'convert a boolean': [
    'true',
    () => toString(true),
  ],
  'convert an object': [
    '{"a":1}',
    () => toString({ a: 1 }),
  ],
};