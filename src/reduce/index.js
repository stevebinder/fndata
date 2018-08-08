const entries = require('../entries');
const isArray = require('../isArray');
const isFunction = require('../isFunction');
const isNumber = require('../isNumber');
const isObject = require('../isObject');
const isString = require('../isString');
const toNumber = require('../toNumber');
const toString = require('../toString');

module.exports = (target, reducer, initial) => {
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