const values = require('./');

module.exports = {
  'extract values from an object': [
    [1, 2, 3],
    () => values({ a: 1, b: 2, c: 3 }),
  ],
  'return an empty array for any non-object': [
    [],
    () => values('cat'),
    () => values(),
    () => values(true),
    () => values([]),
  ],
};