import copy from 'src/copy';
import isArray from 'src/isArray';
import isEmpty from 'src/isEmpty';
import isFunction from 'src/isFunction';
import isNumber from 'src/isNumber';
import isShape from 'src/isShape';
import isString from 'src/isString';
import isObject from 'src/isObject';
import isUndefined from 'src/isUndefined';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

const getBase = (key, pointer) => {
  if (isNumber(key)) {
    if (isArray(pointer)) {
      return [...pointer];
    }
    return [];
  }
  if (isObject(pointer)) {
    return { ...pointer };
  }
  return {};
};

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

const setArray = (target, comparer, setter) =>
  target.map((item, index) =>
    comparer(item, index, target)
      ? setter(item, index, target)
      : item
  );

const setArrayOrObjectWithPath = (target, path, setter) => {
  const keys = getKeys(path);
  const result = getBase(keys[0], target);
  let ref = result;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      const value = setter(ref[key]);
      if (isUndefined(value)) {
        delete ref[key];
      } else {
        ref[key] = value;
      }
    } else {
      ref[key] = getBase(keys[index + 1], ref[key]);
      ref = ref[key];
    }
  });
  return result;
};

const setNumber = (target, comparer, setter) =>
  toNumber(
    toString(target)
      .split('')
      .map((item, index) =>
        comparer(toNumber(item), index, target)
          ? setter(toNumber(item), index, target)
          : item
      )
      .join(''),
  );

const setString = (target, comparer, setter) =>
  target
    .split('')
    .map((item, index) =>
      comparer(item, index, target)
        ? setter(item, index, target)
        : item
    )
    .join('');

export default (target, comparer, setter) => {
  const setterFn = isFunction(setter)
    ? setter
    : () => setter;
  if (
    (isString(comparer) || isArray(comparer))
    &&
    (isEmpty(target) || isObject(target) || isArray(target))
  ) {
    return setArrayOrObjectWithPath(target, comparer, setterFn);
  }
  const comparerFn = (() => {
    if (isFunction(comparer)) {
      return comparer;
    }
    if (isObject(comparer)) {
      return item => isShape(item, comparer);
    }
    if (isNumber(comparer) && !isNumber(target)) {
      return (item, index) => index === comparer;
    }
    return item => item === comparer;
  })();
  if (isString(target)) {
    return setString(target, comparerFn, setterFn);
  }
  if (isNumber(target)) {
    return setNumber(target, comparerFn, setterFn);
  }
  if (isArray(target)) {
    return setArray(target, comparerFn, setterFn);
  }
  return target;
};