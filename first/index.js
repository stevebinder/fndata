import curry from '../curry';
import isArray from '../isArray';
import isEmpty from '../isEmpty';
import isNumber from '../isNumber';
import isString from '../isString';
import toNumber from '../toNumber';
import toString from '../toString';

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