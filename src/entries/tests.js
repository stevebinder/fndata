const entries = require('./index');

module.exports = {
  'argument is not an object or is an empty object': [
    [],
    () => entries(),
    () => entries(null),
    () => entries(0),
    () => entries(() => {}),
    () => entries('a'),
    () => entries({}),
  ],
  'get key value pairs': [
    [
      {
        key: 'a',
        value: 1,
      },
      {
        key: 'b',
        value: 2,
      },
      {
        key: 'c',
        value: null,
      },
    ],
    () => entries({
      a: 1,
      b: 2,
      c: null,
      d: undefined,
    })
  ],
};