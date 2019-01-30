import encode from '../encode';
import isNumber from '../isNumber';
import isString from '../isString';

export default value => {
  if (isString(value)) {
    return value;
  }
  return encode(value);
};