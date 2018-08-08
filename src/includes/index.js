const isNumber = require('../isNumber');
const isString = require('../isString');
const keep = require('../keep');

module.exports = (target, checker) => {
  if (isNumber(target) || isString(target)) {
    return toString(checker).indexOf(toString(checker)) !== -1;
  }
  return !!keep(target, checker).length;
};