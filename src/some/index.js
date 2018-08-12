const entries = require('../entries');
const loop = require('../loop');
const isArray = require('../isArray');
const isFunction = require('../isFunction');
const isObject = require('../isObject');

module.exports = (...args) => {
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