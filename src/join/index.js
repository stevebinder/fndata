const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isObject = require('../isObject');
const isString = require('../isString');
const map = require('../map');

module.exports = (...values) => {
  if (isArray(values[0])) {
    let result = [];
    values.forEach(item => {
      if (isArray(item)) {
        result = [...result, ...item];
      } else {
        result = [...result, item];
      }
    });
    return result;
  }
  return map(
    values,
    item => {
      if (isString(item) || isNumber(item)) {
        return item;
      }
      if (isArray(item) || isObject(item)) {
        try {
          return JSON.stringify(item);
        } catch (e) {
          return '';
        }
      }
      return '';
    },
  ).join('');
};