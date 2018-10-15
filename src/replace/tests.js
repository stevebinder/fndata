import replace from './';
import isString from 'src/isString';

export default {
  'always convert the value to a string': [
    true,
    () => isString(replace()),
    () => isString(replace(2)),
    () => isString(replace('a')),
  ],
  'replace using a string': [
    'acaca',
    () => replace('ababa', 'b', 'c'),
  ],
  'replace using a pattern': [
    'acaba',
    () => replace('ababa', /b/, 'c'),
  ],
};
