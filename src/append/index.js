import curry from 'src/curry';
import isArray from 'src/isArray';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import isUndefined from 'src/isUndefined';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

export default (target, value) => {
  if (isUndefined(value)) {
    return target;
  }
  if (isString(target)) {
    return `${target}${toString(value)}`;
  }
  if (isNumber(target)) {
    return curry(
      target,
      toString,
      result => `${result}${toString(value)}`,
      toNumber,
    );
  }
  if (isArray(target)) {
    return [...target, value];
  }
  return target;
};