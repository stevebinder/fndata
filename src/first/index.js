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
    return value[0];
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      str => str[0],
      toNumber,
    );
  }
  if (value.length) {
    return value[0];
  }
};