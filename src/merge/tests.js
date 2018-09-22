import merge from './';

export default {
  'two objects': [
    { a: 'hello', b: 'world' },
    () => merge(
      { a: 'hello' },
      { b: 'world' },
    ),
  ],
  'two arrays': [
    [1, 2],
    () => merge([1], [2]),
  ],
  'objects with overlapping keys': [
    { a: { a: 1, b: 2 }, b: { a: 1, b: 2 } },
    () => merge(
      { a: { a: 1 }, b: { a: 1 } },
      { a: { b: 2 }, b: { b: 2 } },
    ),
  ],
  'objects with different keys': [
    { a: 1, b: 2 },
    () => merge({ a: 1 }, { b: 2 }),
  ],
  'array with an empty value': [
    [1, 2],
    () => merge([1, 2]),
    () => merge([1, 2], null),
  ],
  'array with a non-array': [
    true,
    () => merge([1, 2], true),
  ],
  'object with an empty value': [
    { a: 1, b: 2 },
    () => merge({ a: 1, b: 2 }),
    () => merge({ a: 1, b: 2 }, null),
  ],
  'object with a non-object': [
    true,
    () => merge({ a: 1, b: 2 }, true),
  ],
  'complex merge': [
    {
      a: 3,
      b: [1, 2],
      c: {
        d: {
          e: 1,
          f: [1, 2, 3],
        },
      },
      g: 1,
      h: 2,
      i: 'helloworld',
    },
    () => merge(
      {
        a: 1,
        b: [1],
        c: {
          d: {
            e: 1,
            f: [1, 2],
          },
        },
        g: 1,
        i: 'hello',
      },
      {
        a: 2,
        b: [2],
        c: {
          d: {
            e: null,
            f: [3],
          },
        },
        h: 2,
        i: 'world',
      },
    ),
  ],
};