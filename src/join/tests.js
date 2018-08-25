const join = require('./');

module.exports = {
  'one array argument with a delimiter': [
    'a.b.c',
    () => join(['a', 'b', 'c'], '.'),
  ],
  'one array argument without a delimiter': [
    'abc',
    () => join(['a', 'b', 'c']),
  ],
  'several arguments': [
    'a.b.c',
    () => join('a', 'b', 'c', '.'),
  ],
  'too few arguments': [
    'a',
    () => join('a'),
    () => join('a', '.'),
  ],
  'mixed array and non array': [
    '["a","b","c"].0.1.[2].["d","e","f"]',
    () => join(['a', 'b', 'c'], 0, 1, [2], ['d', 'e', 'f'], '.'),
  ],
};