const curry = require('../curry');
const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isString = require('../isString');
const join = require('../join');
const map = require('../map');
const split = require('../split');
const toNumber = require('../toNumber');
const toString = require('../toString');

module.exports = (value, method) => {
  if (isArray(value)) {
    return [...value].sort(method);
  }
  if (isString(value)) {
    return curry(
      value,
      split,
      result => [...result].sort(method),
      join,
    );
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      split,
      result => map(result, toNumber),
      result => [...result].sort(method),
      join,
      toNumber,
    );
  }
  return value;
};