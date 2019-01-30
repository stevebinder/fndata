import isArray from '../isArray';
import isBoolean from '../isBoolean';
import isEmpty from '../isEmpty';
import isError from '../isError';
import isFunction from '../isFunction';
import isNumber from '../isNumber';
import isObject from '../isObject';
import isString from '../isString';
import loop from '../loop';
import map from '../map';

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