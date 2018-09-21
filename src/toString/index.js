import encode from 'src/encode';
import isNumber from 'src/isNumber';
import isString from 'src/isString';

export default value => {
  if (isString(value)) {
    return value;
  }
  return encode(value);
};