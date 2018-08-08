const join = require('./index');

module.exports = {
  'strings': [
    'abc',
    () => join(['a', 'b', 'c']),
  ],
  'mixed values': [
    'a10{"name":"sam"}123',
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
};