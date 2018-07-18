const join = require('./index');

module.exports = {
  'concat strings': [
    'abc',
    () => join('a', 'b', 'c'),
  ],
  'join different values': [
    'a10{"name":"sam"}[1,2,3]',
    () => join(
      'a',
      1,
      0,
      null,
      undefined,
      () => {},
      { name: 'sam' },
      [1, 2, 3],
    ),
  ],
  'join arrays': [
    [1, 2, 3, 4, null, undefined, true, false],
    () => join([1, 2], [3, 4], null, undefined, true, false),
  ],
};