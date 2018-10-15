import isPattern from 'src/isPattern';
import toString from 'src/toString';

export default (value, flags = '') =>
  isPattern(value)
    ? value
    : new RegExp(toString(value), flags);