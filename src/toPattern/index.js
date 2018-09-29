import isPattern from 'src/isPattern';
import toString from 'src/toString';

export default value => {
  if (isPattern(value)) {
    return value;
  }
  return new RegExp(toString(value));
};