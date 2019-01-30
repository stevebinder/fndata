import test from './';

export default {
  'fail any empty values': [
    false,
    () => test(null, 'a'),
    () => test(undefined, 'a'),
  ],
  'fail when test is missing': [
    false,
    () => test('a'),
    () => test('a', null),
  ],
  'pass when string matches': [
    true,
    () => test('hello', 'ell'),
  ],
  'pass when pattern matches': [
    true,
    () => test('hello', /ell/),
  ],
  'fail when string does not match': [
    false,
    () => test('hello', 'abc'),
  ],
  'fail when pattern does not match': [
    false,
    () => test('hello', /abc/),
  ],
  'convert any non-strings to a string before testing': [
    true,
    () => test(1, /.+/),
  ],
}