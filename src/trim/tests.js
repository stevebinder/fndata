import isString from 'src/isString';
import trim from './';

export default {
  'return a string': [
    true,
    () => isString(trim()),
  ],
  'trim all tabs, newlines, and whitespace from beginning and end': [
    'hello world',
    () => trim(' \r\n  \r\thello world  \r\n\t\r  '),
  ],
};