import filter from 'src/filter';
import index from 'src/index/index';
import isNumber from 'src/isNumber';
import isString from 'src/isString';

export default (value, checker) => {
  if (isString(value) || isNumber(value)) {
    return index(value, checker) !== -1;
  }
  return !!filter(value, checker).length;
};