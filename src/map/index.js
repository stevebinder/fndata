import entries from 'src/entries';
import get from 'src/get';
import isArray from 'src/isArray';
import isFunction from 'src/isFunction';
import isObject from 'src/isObject';
import isString from 'src/isString';
import toString from 'src/toString';

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