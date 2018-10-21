import attempt from 'src/attempt';
import curry from 'src/curry';
import entries from 'src/entries';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import split from 'src/split';
import toString from 'src/toString';

export default value => {
  if (isObject(value)) {
    return entries(value);
  }
  if (isNumber(value)) {
    return curry(
      value,
      toString,
      split,
    );
  }
  return attempt(() => Array.from(value), []);
};