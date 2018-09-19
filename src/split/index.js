import curry from 'src/curry';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import toNumber from 'src/toNumber';
import toString from 'src/toString';
import map from 'src/map';

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