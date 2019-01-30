import attempt from '../attempt';
import curry from '../curry';
import entries from '../entries';
import isNumber from '../isNumber';
import isObject from '../isObject';
import split from '../split';
import toString from '../toString';

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