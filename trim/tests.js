import isString from '../isString';
import trim from './';

export default {
  'return a string': [
    true,
    () => isString(trim()),
  ],
  'trim leading and trailing spaces': [
    'hello world',
    () => trim('    hello world    '),
  ],
  'trim all tabs': [
    'hello world',
    () => trim('\t\thello\t world\t'),
  ],
  'trim all double spaces in the middle': [
    'hello to the world',
    () => trim('hello  to  the    world'),
  ],
  'trim all triple carriage returns': [
    'hello \n\nworld',
    () => trim('hello \n\n\nworld'),
  ],
};