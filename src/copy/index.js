import isArray from 'src/isArray';
import isBoolean from 'src/isBoolean';
import isEmpty from 'src/isEmpty';
import isError from 'src/isError';
import isFunction from 'src/isFunction';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import isString from 'src/isString';
import loop from 'src/loop';
import map from 'src/map';

const copy = target => {
  if (isArray(target)) {
    return map(target, item => copy(item));
  }
  if (
    isEmpty(target)
    || isBoolean(target)
    || isNumber(target)
    || isString(target)
  ) {
    return target;
  }
  if (isFunction(target)) {
    return (...args) => target(...args);
  }
  if (isError(target)) {
    return new Error(target.message);
  }
  if (isObject(target)) {
    const clone = { ...target };
    loop(
      clone,
      ({ key, value }) => clone[key] = copy(value),
    );
    return clone;
  }
}

export default copy;