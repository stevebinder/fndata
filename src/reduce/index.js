import entries from 'src/entries';
import isArray from 'src/isArray';
import isFunction from 'src/isFunction';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import isString from 'src/isString';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

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