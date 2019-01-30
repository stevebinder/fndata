import curry from '../curry';
import isArray from '../isArray';
import isNumber from '../isNumber';
import isString from '../isString';
import isUndefined from '../isUndefined';
import toNumber from '../toNumber';
import toString from '../toString';

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