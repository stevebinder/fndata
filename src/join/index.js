const concat = require('../concat');
const curry = require('../curry');
const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isObject = require('../isObject');
const isString = require('../isString');
const map = require('../map');

module.exports = (...values) => curry(
  concat(...values),
  result => map(result, item => {
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
  }),
  result => result.join(''),
);
