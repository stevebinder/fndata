const entries = require('../entries');
const isArray = require('../isArray');
const isFunction = require('../isFunction');
const isNumber = require('../isNumber');
const isObject = require('../isObject');
const isShape = require('../isShape');
const isString = require('../isString');
const isUndefined = require('../isUndefined');
const toString = require('../toString');

const createArrayFilter = filterer => item => filterer.some(value =>
  isObject(value)
    ? isShape(item, value)
    : item === value);

module.exports = (target, filterer) => {
  const comparer = (() => {
    if (isUndefined(filterer)) {
      return item => isUndefined(item);
    }
    if (isFunction(filterer)) {
      return filterer;
    }
    if (isArray(filterer)) {
      return createArrayFilter(filterer);
    }
    if (isObject(filterer)) {
      return item => isShape(item, filterer);
    }
    return item => item === filterer;
  })();
  const method = (item, index) => !comparer(item, index, target);
  if (isString(target)) {
    return target.split('').filter(method);
  }
  if (isNumber(target)) {
    return toString(target).split('').filter((item, ...args) =>
      method(toNumber(item), ...args));
  }
  if (isArray(target)) {
    return target.filter(method);
  }
  if (isObject(target)) {
    return entries(target).filter(method);
  }
  return [];
};