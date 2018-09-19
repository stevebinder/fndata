import isArray from 'src/isArray';
import isEmpty from 'src/isEmpty';
import isFunction from 'src/isFunction';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import filter from 'src/filter';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

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