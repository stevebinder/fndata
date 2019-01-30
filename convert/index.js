import isFunction from '../isFunction';

const matches = (value, matcher) => {
  const comparer = isFunction(matcher)
    ? matcher
    : v => v === matcher;
  return comparer(value);
};

export default (value, converters = [], defaultValue = undefined) => {
  for (let i = 0; i < converters.length; i += 1) {
    const [matcher, converter] = converters[i];
    if (matches(value, matcher)) {
      if (isFunction(converter)) {
        return converter(value);
      }
      return converter;
    }
  }
  if (isFunction(defaultValue)) {
    return defaultValue(value);
  }
  return defaultValue;
};