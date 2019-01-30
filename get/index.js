import isArray from '../isArray';
import isEmpty from '../isEmpty';
import isFunction from '../isFunction';
import isNumber from '../isNumber';
import isString from '../isString';
import filter from '../filter';
import toNumber from '../toNumber';
import toString from '../toString';

const getKeys = value => {
  const raw = (() => {
    if (isString(value)) {
      return value.match(/[^\{\[\]\."']+/g) || [];
    }
    if (isArray(value)) {
      return value;
    }
    return [value];
  })();
  return raw.map(item => {
    const num = item * 1;
    if (num === 0 || num > 0) {
      return num;
    }
    return item;
  });
};

export default (target, locator) => {
  if (isEmpty(target)) {
    return undefined;
  }
  if (isString(target)) {
    return target[locator];
  }
  if (isNumber(target)) {
    return toNumber(toString(target)[locator]);
  }
  if (isFunction(locator)) {
    return filter(target, locator)[0];
  }
  const keys = getKeys(locator);
  let ref = target;
  let value;
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (!ref || !ref.hasOwnProperty(key)) {
      return undefined;
    }
    ref = ref[key];
    value = ref;
  }
  return value;
};