import isPattern from '../isPattern';
import toPattern from './';

export default {
  'always return a pattern': [
    true,
    () => isPattern(toPattern()),
    () => isPattern(toPattern('a')),
    () => isPattern(toPattern(/a/)),
  ],
  'build a pattern using a string and flags': [
    true,
    () => toPattern('A').test('A'),
    () => toPattern('a', 'i').test('A'),
  ],
};