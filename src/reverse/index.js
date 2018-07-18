const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isString = require('../isString');
const toNumber = require('../toNumber');
const toString = require('../toString');

module.exports = value => {
  if (isString(value)) {
    return value
      .split('')
      .reverse()
      .join('');
  }
  if (isNumber(value)) {
    return toNumber(
      toString(value)
        .split('')
        .reverse()
        .join('')
    );
  }
  if (isArray(value)) {
    return [...value].reverse();
  }
  return value;
};