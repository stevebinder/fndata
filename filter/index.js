import curry from '../curry';
import entries from '../entries';
import isArray from '../isArray';
import isFunction from '../isFunction';
import isNumber from '../isNumber';
import isObject from '../isObject';
import isShape from '../isShape';
import isString from '../isString';
import reduce from '../reduce';
import set from '../set';
import split from '../split';

const createArrayFilter = filterer => item => filterer.some(value =>
  isObject(value)
    ? isShape(item, value)
    : item === value);

export default (target, filterer) => {
  const method = (() => {
    if (isFunction(filterer)) {
      return filterer;
    }
    if (isArray(filterer)) {
      return createArrayFilter(filterer);
    }
    if (isObject(filterer)) {
      return item => isShape(item, filterer);
    }
    return item => item === filterer;
  })();
  if (isString(target)) {
    return target.split('').filter(method);
  }
  if (isNumber(target)) {
    return curry(
      target,
      split,
      value => value.filter(method),
    );
  }
  if (isArray(target)) {
    return target.filter(method);
  }
  if (isObject(target)) {
    return curry(
      target,
      entries,
      result => result.filter(method),
      [reduce, {}, (result, { key, value }) => set(result, key, value)],
    );
  }
  return [];
};