import curry from '../curry';
import entries from '../entries';
import isArray from '../isArray';
import isFunction from '../isFunction';
import isNumber from '../isNumber';
import isObject from '../isObject';
import isShape from '../isShape';
import isString from '../isString';
import isUndefined from '../isUndefined';
import reduce from '../reduce';
import set from '../set';
import toString from '../toString';

const createArrayFilter = filterer => item => filterer.some(value =>
  isObject(value)
    ? isShape(item, value)
    : item === value);

export default (target, filterer) => {
  const comparer = (() => {
    if (isUndefined(filterer)) {
      return item => isUndefined(item);
    }
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
  const method = (item, index) => !comparer(item, index, target);
  if (isString(target)) {
    return target.split('').filter(method);
  }
  if (isNumber(target)) {
    return toString(target).split('').filter((item, ...args) =>
      method(toNumber(item), ...args));
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