import isArray from 'src/isArray';
import isBoolean from 'src/isBoolean';
import isEmpty from 'src/isEmpty';
import isFunction from 'src/isFunction';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import isString from 'src/isString';

const copy = value => {
  if (
    isEmpty(value)
    || isBoolean(value)
    || isNumber(value)
    || isString(value)
  ) {
    return value;
  }
  if (isFunction(value)) {
    return (...args) => value(...args);
  }
  if (isArray(value)) {
    return [...value];
  }
  try {
    const dup = { ...value };
    for (const key in dup) {
      dup[key] = copy(dup[key]);
    }
    return dup;
  } catch (e) {
    return undefined;
  }
}

export default copy;