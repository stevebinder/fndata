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
    return `${toString(value)}${target}`;
  }
  if (isNumber(target)) {
    return curry(
      target,
      toString,
      result => `${toString(value)}${result}`,
      toNumber,
    );
  }
  if (isArray(target)) {
    return [value, ...target];
  }
  return target;
};