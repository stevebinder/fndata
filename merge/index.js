import curry from '../curry';
import dedupe from '../dedupe';
import keys from '../keys';
import isArray from '../isArray';
import isEmpty from '../isEmpty';
import isNumber from '../isNumber';
import isObject from '../isObject';
import isString from '../isString';
import reduce from '../reduce';
import reject from '../reject';

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