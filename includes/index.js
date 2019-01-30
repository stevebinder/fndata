import filter from '../filter';
import index from '../index/index';
import isNumber from '../isNumber';
import isString from '../isString';

export default (value, checker) => {
  if (isString(value) || isNumber(value)) {
    return index(value, checker) !== -1;
  }
  return !!filter(value, checker).length;
};