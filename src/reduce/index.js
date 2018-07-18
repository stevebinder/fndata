const entries = require('../entries');
const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isObject = require('../isObject');
const isString = require('../isString');
const toNumber = require('../toNumber');
const toString = require('../toString');

module.exports = (target, reducer, initial) => {
  if (isString(target)) {
    return target
      .split('')
      .reduce(
        (result, item, index) =>
          reducer(result, item, index, target),
        initial,
      );
  }
  if (isNumber(target)) {
    return toString(target)
      .split('')
      .reduce(
        (result, item, index) =>
          reducer(result, toNumber(item), index, target),
        initial,
      );
  }
  if (isArray(target)) {
    return target.reduce(reducer, initial);
  }
  if (isObject(target)) {
    return entries(target)
      .reduce(
        (result, item, index) =>
          reducer(result, item, index, target),
        initial,
      );
  }
};