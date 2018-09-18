const isEqual = require('../isEqual');
const isFunction = require('../isFunction');

module.exports = value => {
  if (!isFunction(value)) {
    return () => value;
  };
  let lastArguments;
  let lastResult;
  return (...arguments) => {
    if (!isEqual(lastArguments, arguments)) {
      lastArguments = arguments;
      lastResult = value(...arguments);
    }
    return lastResult;
  }
};