import isArray from 'src/isArray';
import isFunction from 'src/isFunction';

const none = (value, method) => {
  for (let i = 0; i < value.length; i += 1) {
    if (method(value[i], i, method)) {
      return false;
    }
  }
  return true;
};

export default (...args) => {
  const [value, method] = args;
  if (
    args.length === 2
    && isArray(value)
    && isFunction(method)
  ) {
    return none(value, method);
  }
  return none(args, item => item);
};