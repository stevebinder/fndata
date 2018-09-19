import entries from 'src/entries';
import loop from 'src/loop';
import isArray from 'src/isArray';
import isFunction from 'src/isFunction';
import isObject from 'src/isObject';

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