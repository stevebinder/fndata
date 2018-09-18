const isArray = require('../isArray');
const isNan = require('../isNan');
const isObject = require('../isObject');

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  if (!a && b || a && !b) {
    return false;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (isNan(a)) {
    return isNan(b);
  }
  if (isArray(a) || isObject(a)) {
    if (a.length !== b.length) {
      return false;
    }
    for (const key in a) {
      const aVal = a[key];
      const bVal = b[key];
      if (!isEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = isEqual;