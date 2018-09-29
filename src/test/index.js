import isEmpty from 'src/isEmpty';
import toPattern from 'src/toPattern';
import toString from 'src/toString';

export default (value, pattern) => {
  if (isEmpty(value) || isEmpty(pattern)) {
    return false;
  }
  return toPattern(pattern).test(toString(value));
};