import toArray from '../toArray';
import isNumber from '../isNumber';
import isString from '../isString';
import toString from '../toString';

export default (value, target) => {
  if (isString(value) || isNumber(value)) {
    return toString(value).indexOf(target);
  }
  return toArray(value).indexOf(target);
};