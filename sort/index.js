import curry from '../curry';
import isArray from '../isArray';
import isNumber from '../isNumber';
import isString from '../isString';
import join from '../join';
import map from '../map';
import split from '../split';
import toNumber from '../toNumber';
import toString from '../toString';

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