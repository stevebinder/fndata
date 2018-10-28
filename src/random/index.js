import curry from 'src/curry';
import isArray from 'src/isArray';
import isEmpty from 'src/isEmpty';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import isString from 'src/isString';
import keys from 'src/keys';
import split from 'src/split';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

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
      keys,
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