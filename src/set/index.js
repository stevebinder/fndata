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

function setObject(target, path, setter) {
  const keys = (() => {
    if (isString(path)) {
      return path.split('.');
    }
    if (isArray(path)) {
      return path;
    }
    return [path];
  })();
  const dup = { ...target };
  let ref = dup;
  keys.forEach((key, index) => {
    if (isEmpty(ref[key])) {
      ref[key] = {};
    }
    if (index === keys.length - 1) {
      ref[key] = setter(get(target, path));
    } else {
      ref = { ...ref[key] };
    }
    //console.log(key, JSON.stringify(ref), JSON.stringify(dup));
  });
  return dup;
}

function setArray(target, comparer, setter) {
  return target.map((item, index) =>
    comparer(item, index, target)
      ? setter(item, index, target)
      : item,
  );
}

function setNumber(target, comparer, setter) {
  return toNumber(
    toString(target)
      .split('')
      .map((item, index) =>
        comparer(toNumber(item), index, target)
          ? setter(toNumber(item), index, target)
          : item
      )
      .join(''),
  );
}

function setString(target, comparer, setter) {
  return target
    .split('')
    .map((item, index) =>
      comparer(item, index, target)
        ? setter(item, index, target)
        : item
    )
    .join('');
}

module.exports = (target, comparer, setter) => {
  if (isEmpty(target)) {
    return target;
  }
  const setterFn = isFunction(setter)
    ? setter
    : () => setter;
  if (isObject(target)) {
    return setObject(target, comparer, setterFn);
  }
  const comparerFn = (() => {
    if (isFunction(comparer)) {
      return comparer;
    }
    if (isNumber(comparer)) {
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