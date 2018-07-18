const isArray = require('../isArray');
const isEmpty = require('../isEmpty');
const isFunction = require('../isFunction');
const isNumber = require('../isNumber');
const isObject = require('../isObject');
const isString = require('../isString');

const copy = value => {
  if (isEmpty(value) || isNumber(value) || isString(value)) {
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

module.exports = copy;