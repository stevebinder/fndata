import curry from 'src/curry';
import isArray from 'src/isArray';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

export default (value, start, end) => {
  if (isString(value) || isArray(value)) {
    return value.slice(start, end);
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      result => result.slice(start, end),
      toNumber,
    );
  }
  return value;
};