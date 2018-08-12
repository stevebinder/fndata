const isNumber = require('../isNumber');
const isString = require('../isString');
const filter = require('../filter');

module.exports = (target, checker) => {
  if (isNumber(target) || isString(target)) {
    return toString(checker).indexOf(toString(checker)) !== -1;
  }
  return !!filter(target, checker).length;
};