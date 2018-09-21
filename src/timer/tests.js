import isFunction from 'src/isFunction';
import timer from './';

export default {
  'should return a function': [
    true,
    () => isFunction(timer()),
  ],
};