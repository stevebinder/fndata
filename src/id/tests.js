import isString from 'src/isString';
import id from './';

export default {
  'should return a string': [
    true,
    () => isString(id()),
  ],
  'should return a 36 character string': [
    36,
    () => id().length,
  ],
};