import entries from '../entries';
import loop from '../loop';
import isArray from '../isArray';
import isFunction from '../isFunction';
import isObject from '../isObject';

export default (...args) => {
  const [value, method] = args;
  if (args.length === 2 && isFunction(method)) {
    if (isArray(value)) {
      return value.some(method);
    }
    if (isObject(value)) {
      return entries(value).some(method);
    }
  }
  return args.some(item => item);
};