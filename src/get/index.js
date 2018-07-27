const filter = require('../filter');
const isArray = require('../isArray');
const isEmpty = require('../isEmpty');
const isFunction = require('../isFunction');
const isNumber = require('../isNumber');
const isString = require('../isString');
const toNumber = require('../toNumber');
const toString = require('../toString');

module.exports = (target, locator) => {
  if (isEmpty(target)) {
    return undefined;
  }
  if (isString(target)) {
    return target[locator];
  }
  if (isNumber(target)) {
    return toNumber(toString(target)[locator]);
  }
  if (isFunction(locator)) {
    return filter(target, locator)[0];
  }
  const keys = (() => {
    if (isString(locator)) {
      return locator.match(/[^\{\[\]\.]+/g) || [];
    }
    if (isArray(locator)) {
      return locator;
    }
    return [];
  })();
  let ref = target;
  let value;
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (!ref || !ref.hasOwnProperty(key)) {
      return undefined;
    }
    ref = ref[key];
    value = ref;
  }
  return value;
};