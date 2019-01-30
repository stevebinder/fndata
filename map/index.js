import entries from '../entries';
import get from '../get';
import isArray from '../isArray';
import isFunction from '../isFunction';
import isObject from '../isObject';
import isString from '../isString';
import toString from '../toString';

const mapString = (target, method) => target
  .split('')
  .map(method)
  .join('');


export default (target, method) => {
  const mapper = (() => {
    if (isFunction(method)) {
      return method;
    }
    return item => get(item, toString(method));
  })();
  if (isString(target)) {
    return mapString(target, mapper);
  }
  if (isArray(target)) {
    return target.map(mapper);
  }
  if (isObject(target)) {
    return entries(target)
      .map((item, index) => mapper(item, index, target));
  }
  return [];
};