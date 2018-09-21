import curry from 'src/curry';
import toPattern from 'src/toPattern';
import toString from 'src/toString';

export default (value, pattern) => {
  if (isEmpty(pattern)) {
    return false;
  }
  return curry(
    value,
    toString,
    result => result.test(toPattern(pattern)),
  );
};