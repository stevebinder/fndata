const isArray = require('../isArray');
const isString = require('../isString');

module.exports = (value, a, b) => {
  if (isString(value)) {
    return value;
  }
  if (isArray(value)) {
    return value;
  }
  return value;
};