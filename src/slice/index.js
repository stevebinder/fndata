import curry from 'src/curry';
import isArray from 'src/isArray';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import isUndefined from 'src/isUndefined';
import toNumber from 'src/toNumber';
import round from 'src/round';
import toString from 'src/toString';

const fixedSlice = (value, start = 0, end = value.length) => {
  const min = round(start, 0, end);
  const max = round(end, start, value.length);
  return value.slice(min, max);
};

export default (value, start, end) => {
  if (isString(value) || isArray(value)) {
    return fixedSlice(value, start, end);
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      result => fixedSlice(result, start, end),
      toNumber,
    );
  }
  return value;
};