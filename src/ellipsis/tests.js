import ellipsis from './';
import isString from 'src/isString';

export default {
  'should return a string': [
    true,
    () => isString(ellipsis()),
  ],
  'should not truncate if under or equal to the limit': [
    'hello world',
    () => ellipsis('hello world'),
    () => ellipsis('hello world', 11),
  ],
  'should truncate if over the limit': [
    'hello worl...',
    () => ellipsis('hello world', 10),
  ],
  'should use special characters for ellipsis': [
    'hello worl_',
    () => ellipsis('hello world', 10, '_'),
  ],
};