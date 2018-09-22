import curry from 'src/curry';
import dedupe from 'src/dedupe';
import keys from 'src/keys';
import isArray from 'src/isArray';
import isEmpty from 'src/isEmpty';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import isString from 'src/isString';
import reduce from 'src/reduce';
import reject from 'src/reject';

const merge = (a, b, dedupeArrays = false) => {
  if (isArray(a) || isArray(b)) {
    if (isEmpty(a)) {
      return b;
    }
    if (isEmpty(b)) {
      return a;
    }
    if (!isArray(b)) {
      return null;
    }
    if (dedupeArrays) {
      return dedupe([...a, ...b]);
    }
    return [...a, ...b];
  }
  if (isObject(a) || isObject(b)) {
    if (isEmpty(a)) {
      return b;
    }
    if (isEmpty(b)) {
      return a;
    }
    if (!isObject(b)) {
      return null;
    }
    return mergeObject(a, b, dedupe);
  }
  if (isNumber(a) || isNumber(b)) {
    if (isEmpty(a)) {
      return b;
    }
    if (isEmpty(b)) {
      return a;
    }
    if (!isNumber(b)) {
      return null;
    }
    return a + b;
  }
  if (isString(a) || isString(b)) {
    if (isEmpty(a)) {
      return b;
    }
    if (isEmpty(b)) {
      return a;
    }
    if (!isString(b)) {
      return null;
    }
    return `${a}${b}`;
  }
  if (isEmpty(b)) {
    return a;
  }
  return b;
};

const mergeObject = (a, b, dedupeArrays) => reduce(
  [...keys(a), ...keys(b)],
  {},
  (result, { key }) => ({
    ...result,
    [key]: merge(a[key], b[key], dedupeArrays),
  }),
);

export default merge;

console.log(merge({ a: 1 }, { b: 2 }))