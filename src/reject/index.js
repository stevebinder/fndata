import curry from 'src/curry';
import entries from 'src/entries';
import isArray from 'src/isArray';
import isFunction from 'src/isFunction';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import isShape from 'src/isShape';
import isString from 'src/isString';
import isUndefined from 'src/isUndefined';
import reduce from 'src/reduce';
import set from 'src/set';
import toString from 'src/toString';

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