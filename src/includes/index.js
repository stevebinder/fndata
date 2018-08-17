const filter = require('../filter');
const isNumber = require('../isNumber');
const isString = require('../isString');

module.exports = (value, checker) => {
  if (isNumber(value) || isString(value)) {
    return toString(checker).indexOf(toString(checker)) !== -1;
  }
  return !!filter(value, checker).length;
};