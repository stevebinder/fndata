import curry from 'src/curry';
import isArray from 'src/isArray';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import join from 'src/join';
import map from 'src/map';
import split from 'src/split';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

export default (value, method) => {
  if (isArray(value)) {
    return [...value].sort(method);
  }
  if (isString(value)) {
    return curry(
      value,
      split,
      result => [...result].sort(method),
      join,
    );
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      split,
      result => map(result, toNumber),
      result => [...result].sort(method),
      join,
      toNumber,
    );
  }
  return value;
};