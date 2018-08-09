const isArray = require('../isArray');
const isFunction = require('../isFunction');

module.exports = (...args) => {
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