import curry from '../curry';
import isNumber from '../isNumber';
import isString from '../isString';
import toNumber from '../toNumber';
import toString from '../toString';
import map from '../map';

export default (value, splitter) => {
  if (isString(value)) {
    return value.split(splitter || '');
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      result => result.split(splitter || ''),
      result => map(result, toNumber),
    );
  }
  return [];
};