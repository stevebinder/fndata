import isPattern from '../isPattern';
import toString from '../toString';

export default (value, flags = '') =>
  isPattern(value)
    ? value
    : new RegExp(toString(value), flags);