import isEmpty from '../isEmpty';
import toPattern from '../toPattern';
import toString from '../toString';

export default (value, pattern) => {
  if (isEmpty(value) || isEmpty(pattern)) {
    return false;
  }
  return toPattern(pattern)
    .test(toString(value));
};