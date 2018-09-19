import filter from 'src/filter';
import isNumber from 'src/isNumber';
import isString from 'src/isString';

export default (value, checker) => {
  if (isNumber(value) || isString(value)) {
    return toString(checker).indexOf(toString(checker)) !== -1;
  }
  return !!filter(value, checker).length;
};