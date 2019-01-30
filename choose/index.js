import isFunction from '../isFunction';

const matches = (value, matcher) => {
  const comparer = isFunction(matcher)
    ? matcher
    : v => v === matcher;
  return comparer(value);
};

export default (value, converters = [], defaultResult = undefined) => {
  for (let i = 0; i < converters.length; i += 1) {
    const [matcher, result] = converters[i];
    if (matches(value, matcher)) {
      return result;
    }
  }
  return defaultResult;
};