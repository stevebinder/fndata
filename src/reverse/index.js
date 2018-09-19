import isArray from 'src/isArray';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

export default value => {
  if (isString(value)) {
    return value
      .split('')
      .reverse()
      .join('');
  }
  if (isNumber(value)) {
    return toNumber(
      toString(value)
        .split('')
        .reverse()
        .join('')
    );
  }
  if (isArray(value)) {
    return [...value].reverse();
  }
  return value;
};