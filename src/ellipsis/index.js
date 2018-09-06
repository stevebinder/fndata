const isString = require('../isString');
const toString = require('../toString');

module.exports = (value, max = Infinity, characters = '...') => {
  if (!isString(value)) {
    return toString(value);
  }
  if (value.length <= max) {
    return value;
  }
  return `${value.substring(0, max)}${characters}`;
};
