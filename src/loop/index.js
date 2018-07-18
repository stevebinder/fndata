const entries = require('../entries');
const isArray = require('../isArray');
const isFunction = require('../isFunction');
const isNumber = require('../isNumber');
const isString = require('../isString');
const isUndefined = require('../isUndefined');
const toNumber = require('../toNumber');
const toString = require('../toString');

function over(target, method) {
  for (let i = 0; i < target.length; i += 1) {
    method(target[i], i, target);
  }
}

module.exports = (target, method) => {
  if (!isFunction(method)) {
    return;
  }
  if (isArray(target)) {
    over(target, method);
  } else if (isNumber(target)) {
    over(
      toString(target).split(''),
      (item, ...args) => method(toNumber(item), ...args),
    );
  } else if (isString(target)) {
    over(toString(target).split(''), method);
  }
  over(entries(target), method);
}