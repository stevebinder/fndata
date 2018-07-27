const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isString = require('../isString');
const toNumber = require('../toNumber');
const toString = require('../toString');

const moveArray = (array, fromIndex, toIndex) => {
  if (fromIndex === toIndex) {
    return array;
  }
  return array.reduce(
    (result, item, index) => {
      if (index === fromIndex) {
        return result;
      }
      if (index === toIndex) {
        if (toIndex < fromIndex) {
          return [...result, array[fromIndex], item];
        }
        return [...result, item, array[fromIndex]];
      }
      return [...result, item];
    },
    [],
  );
};

module.exports = (value, fromIndex, toIndex) => {
  if (
    fromIndex === toIndex
    || !isNumber(fromIndex)
    || !isNumber(toIndex)
  ) {
    return value;
  }
  if (isString(value)) {
    return moveArray(
      value.split(''),
      fromIndex,
      toIndex,
    ).join('');
  }
  if (isNumber(value)) {
    return toNumber(moveArray(
      toString(value).split(''),
      fromIndex,
      toIndex,
    ).join(''));
  }
  if (isArray(value)) {
    return moveArray(value, fromIndex, toIndex);
  }
  return value;
};