const isEqual = require('../isEqual');
const isFunction = require('../isFunction');

module.exports = value => {
  if (!isFunction(value)) {
    return () => value;
  };
  let lastArguments;
  let lastResult;
  return (...args) => {
    if (!isEqual(lastArguments, args)) {
      lastArguments = args;
      lastResult = value(...args);
    }
    return lastResult;
  }
};