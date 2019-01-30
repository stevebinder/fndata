import isArray from '../isArray';
import isNumber from '../isNumber';
import isString from '../isString';
import toNumber from '../toNumber';
import toString from '../toString';

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