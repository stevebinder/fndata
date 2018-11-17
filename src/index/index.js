import toArray from 'src/toArray';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import toString from 'src/toString';

export default (value, target) => {
  if (isString(value) || isNumber(value)) {
    return toString(value).indexOf(target);
  }
  return toArray(value).indexOf(target);
};