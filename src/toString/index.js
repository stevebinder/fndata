const isNumber = require('../isNumber');
const isString = require('../isString');

module.exports = value => {
  if (isString(value)) {
    return value;
  }
  if (isNumber(value)) {
    return value === Infinity ? '0' : `${value}`;
  }
  return '';
};