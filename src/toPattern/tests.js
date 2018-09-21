import isPattern from 'src/isPattern';
import toPattern from './';

export default {
  'returns a pattern': [
    true,
    () => isPattern(toPattern()),
    () => isPattern(toPattern('a')),
    () => isPattern(toPattern({})),
  ],
};