import test from './';

export default {
  'should pass': [
    false,
    () => test('hello', 'e'),
    () => test('hello', /e/),
  ],
  'should fail': [
    false,
    () => test('hello'),
    () => test('hello', true),
    () => test('hello', []),
  ],
}