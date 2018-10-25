import curry from 'src/curry';
import isArray from 'src/isArray';
import isEmpty from 'src/isEmpty';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

export default value => {
  if (isEmpty(value)) {
    return undefined;
  }
  if (isArray(value) || isString(value)) {
    return value[value.length - 1];
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      str => str[str.length - 1],
      toNumber,
    );
  }
  if (value.length) {
    return value[value.length - 1];
  }
};