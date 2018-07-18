const isArray = require('../isArray');
const isNan = require('../isNan');
const isObject = require('../isObject');

const compare = (a, b) => {
  for (const key in a) {
    const aVal = a[key];
    const bVal = b[key];
    if (isObject(aVal)) {
      if (!isObject(bVal)) {
        return false;
      }
      if (!compare(aVal, bVal)) {
        return false;
      }
    } else if (b[key] !== a[key]) {
      return false;
    }
  }
  return true;
};

module.exports = (a, b) => {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (isNan(a)) {
    return isNan(b);
  }
  if (isArray(a)) {
    if (!isArray(b)) {
      return false;
    }
    return compare(a, b);
  }
  if (typeof a === 'object') {
    if (typeof b !== 'object') {
      return false;
    }
    return compare(a, b);
  }
  return false;
};