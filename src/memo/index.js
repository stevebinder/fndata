import isEqual from 'src/isEqual';
import isFunction from 'src/isFunction';

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