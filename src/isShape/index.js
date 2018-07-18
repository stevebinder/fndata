const entries = require('../entries');
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

module.exports = (target, properties, exact) => {
  const a = exact ? target : properties;
  const b = exact ? properties : target;
  return compare(a, b);
};