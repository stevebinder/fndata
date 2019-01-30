import entries from '../entries';
import isArray from '../isArray';
import isFunction from '../isFunction';
import isNumber from '../isNumber';
import isObject from '../isObject';
import isString from '../isString';
import toNumber from '../toNumber';
import toString from '../toString';

export default (target, reducer, initial) => {
  const reducerMethod = (() => {
    if (isFunction(reducer)) {
      return reducer;
    }
    if (isFunction(initial)) {
      return initial;
    }
    return result => result;
  })();
  const initialValue = (() => {
    if (!isFunction(reducer)) {
      return reducer;
    }
    if (!isFunction(initial)) {
      return initial;
    }
  })();
  if (isString(target)) {
    return target
      .split('')
      .reduce(
        (result, item, index) =>
          reducerMethod(result, item, index, target),
        initialValue,
      );
  }
  if (isNumber(target)) {
    return toString(target)
      .split('')
      .reduce(
        (result, item, index) =>
          reducerMethod(result, toNumber(item), index, target),
        initialValue,
      );
  }
  if (isArray(target)) {
    return target.reduce(reducerMethod, initialValue);
  }
  if (isObject(target)) {
    return entries(target)
      .reduce(
        (result, item, index) =>
          reducerMethod(result, item, index, target),
        initialValue,
      );
  }
};