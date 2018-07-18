const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isString = require('../isString');
const reverse = require('../reverse');
const toNumber = require('../toNumber');

const prepend = (target, value) => {
  if (isString(target)) {
    return `${value}${target}`;
  }
  if (isNumber(target)) {
    return toNumber(`${value}${target}`);
  }
  if (isArray(target)) {
    return [value, ...target];
  }
  return target;
};

module.exports = (target, value) => {
  const values = isArray(value) ? value : [value];
  let result = target;
  reverse(values)
    .forEach(item => result = prepend(result, item));
  return result;
};