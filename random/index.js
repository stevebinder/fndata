import curry from '../curry';
import isArray from '../isArray';
import isEmpty from '../isEmpty';
import isNumber from '../isNumber';
import isObject from '../isObject';
import isString from '../isString';
import split from '../split';
import values from '../values';
import toNumber from '../toNumber';
import toString from '../toString';

const rand = ary => ary[Math.floor(Math.random() * ary.length)];

export default value => {
  if (isEmpty(value)) {
    return Math.random();
  }
  if (isArray(value)) {
    return rand(value);
  }
  if (isObject(value)) {
    return curry(
      value,
      values,
      rand,
    );
  }
  if (isString(value)) {
    return curry(
      value,
      toString,
      split,
      ary => rand(ary),
    );
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      split,
      ary => rand(ary),
      toNumber,
    );
  }
  return value;
};