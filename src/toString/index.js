import isNumber from 'src/isNumber';
import isString from 'src/isString';

export default value => {
  if (isString(value)) {
    return value;
  }
  if (isNumber(value)) {
    return value === Infinity ? '0' : `${value}`;
  }
  return '';
};