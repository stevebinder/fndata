import curry from '../curry';
import includes from '../includes';
import isArray from '../isArray';
import isNumber from '../isNumber';
import isString from '../isString';
import join from '../join';
import reduce from '../reduce';
import split from '../split';
import toString from '../toString';

export default value => {
  if (isArray(value)) {
    return reduce(
      value,
      [],
      (result, item) => includes(result, item)
        ? result
        : [...result, item ],
    );
  }
  if (isNumber(value) || isString(value)) {
    return curry(
      value,
      toString,
      split,
      [
        reduce,
        [],
        (result, item) => includes(result, item)
          ? result
          : [...result, item ],
      ],
      join,
    );
  }
  return value;
};