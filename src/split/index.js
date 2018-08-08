const curry = require('../curry');
const isNumber = require('../isNumber');
const isString = require('../isString');
const toNumber = require('../toNumber');
const toString = require('../toString');
const map = require('../map');

module.exports = (value, splitter) => {
  if (isString(value)) {
    return value.split(splitter || '');
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      result => result.split(splitter || ''),
      result => map(result, toNumber),
    );
  }
  return [];
};