const entries = require('../entries');
const isArray = require('../isArray');
const isObject = require('../isObject');
const isString = require('../isString');

const mapString = (target, method) => target
  .split('')
  .map(method)
  .join('');


module.exports = (target, method) => {
  if (isString(target)) {
    return mapString(target, method);
  }
  if (isArray(target)) {
    return target.map(method);
  }
  if (isObject(target)) {
    return entries(target)
      .map((item, index) => method(item, index, target));
  }
  return [];
};