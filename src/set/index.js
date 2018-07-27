const copy = require('../copy');
const get = require('../get');
const isArray = require('../isArray');
const isEmpty = require('../isEmpty');
const isFunction = require('../isFunction');
const isNumber = require('../isNumber');
const isShape = require('../isShape');
const isString = require('../isString');
const isObject = require('../isObject');
const toNumber = require('../toNumber');
const toString = require('../toString');

const setArray = (target, comparer, setter) => {
  return target.map((item, index) =>
    comparer(item, index, target)
      ? setter(item, index, target)
      : item,
  );
};

const setArrayOrObject = (target, path, setter) => {
  const keys = (() => {
    if (isString(path)) {
      return path.split('.');
    }
    if (isArray(path)) {
      return path;
    }
    return [path];
  })();
  const getBase = key => isNumber(key) ? [] : {};
  const dup = target ? target : getBase(keys[0]);
  let ref = dup;
  keys.forEach((key, index) => {
    if (isEmpty(ref[key])) {
      ref[key] = getBase(key);
    }
    if (index === keys.length - 1) {
      ref[key] = "BLAST";//setter(get(target, path));
    } else {
      ref = isNumber(key)
        ? [ ...ref[key] ]
        : { ...ref[key] };
    }
  });
  return dup;
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

module.exports = (target, comparer, setter) => {
  const setterFn = isFunction(setter)
    ? setter
    : () => setter;
  if (
    isEmpty(target)
    || isObject(target)
    || (isArray(target) && !isNumber(setter))
  ) {
    return setArrayOrObject(target, comparer, setterFn);
  }
  const comparerFn = (() => {
    if (isFunction(comparer)) {
      return comparer;
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
  return target;
};