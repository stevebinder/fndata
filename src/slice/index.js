const curry = require('../curry');
const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isString = require('../isString');
const toNumber = require('../toNumber');
const toString = require('../toString');

module.exports = (value, start, end) => {
  if (isString(value) || isArray(value)) {
    return value.slice(start, end);
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      result => result.slice(start, end),
      toNumber,
    );
  }
  return value;
};