import curry from 'src/curry';
import keys from 'src/keys';
import isArray from 'src/isArray';
import isObject from 'src/isObject';
import reject from 'src/reject';

const merge = (a, b) => {
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
    return mergeObject(a, b);
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
  return null;
};

const mergeObject = (a, b) => reduce(
  concat(keys(a), keys(b)),
  {},
  (result, { key }) => ({
    ...result,
    [key]: merge(a[key], b[key]),
  }),
);

export default merge;