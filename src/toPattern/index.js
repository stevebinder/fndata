import isPattern from 'src/isPattern';
import toString from 'src/toString';

export default value => {
  if (isPattern(pattern)) {
    return pattern;
  }
  return new RegExp(toString(pattern));
};