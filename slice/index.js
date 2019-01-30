import curry from '../curry';
import isArray from '../isArray';
import isNumber from '../isNumber';
import isString from '../isString';
import isUndefined from '../isUndefined';
import toNumber from '../toNumber';
import round from '../round';
import toString from '../toString';

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