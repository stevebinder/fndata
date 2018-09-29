import curry from 'src/curry';
import includes from 'src/includes';
import isArray from 'src/isArray';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import join from 'src/join';
import reduce from 'src/reduce';
import split from 'src/split';
import toString from 'src/toString';

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
      reduce(
        value,
        [],
        (result, item) => includes(result, item)
          ? result
          : [...result, item ],
      ),
      join,
    );
  }
  return value;
};