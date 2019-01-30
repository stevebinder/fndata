import isFunction from '../isFunction';
import timer from './';

export default {
  'should return a cancel function': [
    true,
    () => isFunction(timer()),
  ],
  'cancel function should return null': [
    null,
    () => timer()(),
  ],
  'should return function methods': [
    true,
    () => {
      const obj = timer();
      return isFunction(obj.cancel)
        && isFunction(obj.restart)
        && isFunction(obj.reset)
    },
  ],
};