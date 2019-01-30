import isEqual from '../isEqual';
import isFunction from '../isFunction';

export default value => {
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