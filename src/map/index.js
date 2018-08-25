const entries = require('../entries');
const get = require('../get');
const isArray = require('../isArray');
const isFunction = require('../isFunction');
const isObject = require('../isObject');
const isString = require('../isString');
const toString = require('../toString');

const mapString = (target, method) => target
  .split('')
  .map(method)
  .join('');


module.exports = (target, method) => {
  const mapper = (() => {
    if (isFunction(method)) {
      return method;
    }
    return item => get(item, toString(method));
  })();
  if (isString(target)) {
    return mapString(target, mapper);
  }
  if (isArray(target)) {
    return target.map(mapper);
  }
  if (isObject(target)) {
    return entries(target)
      .map((item, index) => mapper(item, index, target));
  }
  return [];
};