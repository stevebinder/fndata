const isArray = require('../isArray');
const isFunction = require('../isFunction');

module.exports = (...args) => {
  const [value, method] = args;
  if (
    args.length === 2
    && isArray(value)
    && isFunction(method)
  ) {
    return value.some(method);
  }
  return args.some(item => item);
};