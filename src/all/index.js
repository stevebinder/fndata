import isArray from 'src/isArray';
import isFunction from 'src/isFunction';

export default (...args) => {
  const [value, method] = args;
  if (
    args.length === 2
    && isArray(value)
    && isFunction(method)
  ) {
    return value.every(method);
  }
  return args.every(item => item);
};