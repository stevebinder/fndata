import ellipsis from './';
import isString from 'src/isString';

export default {
  'always return a string': [
    true,
    () => isString(ellipsis()),
    () => isString(ellipsis(null)),
    () => isString(ellipsis(true)),
    () => isString(ellipsis(1)),
    () => isString(ellipsis({})),
    () => isString(ellipsis([])),
    () => isString(ellipsis(() => {})),
  ],
  'do not truncate if under or equal to the limit': [
    'hello world',
    () => ellipsis('hello world'),
    () => ellipsis('hello world', 11),
  ],
  'truncate if over the limit': [
    'hello worl...',
    () => ellipsis('hello world', 10),
  ],
  'use special characters': [
    'hello worl_',
    () => ellipsis('hello world', 10, '_'),
  ],
};