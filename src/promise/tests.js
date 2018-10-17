import isFunction from 'src/isFunction';
import promise from './';

export default {
  'should return a cancel function': [
    true,
    () => isFunction(promise()),
  ],
  'should return the given interface': [
    true,
    () => {
      const obj = promise();
      return isFunction(obj.cancel)
        && isFunction(obj.catch)
        && isFunction(obj.finally)
        && isFunction(obj.then)
        && obj.fulfilled === false
        && obj.hasOwnProperty('result');
    },
  ],
};