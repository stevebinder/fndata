const join = require('./');

module.exports = {
  'strings': [
    'a.b.c',
    () => join(['a', 'b', 'c'], '.'),
  ],
  'one array argument without a delimiter': [
    'abc',
    () => join(['a', 'b', 'c']),
  ],
  'numbers': [
    '0.1.2',
    () => join([0, 1, 2], '.'),
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