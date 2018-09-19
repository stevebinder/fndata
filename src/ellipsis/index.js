import isString from 'src/isString';
import toString from 'src/toString';

export default (value, max = Infinity, characters = '...') => {
  if (!isString(value)) {
    return toString(value);
  }
  if (value.length <= max) {
    return value;
  }
  return `${value.substring(0, max)}${characters}`;
};
