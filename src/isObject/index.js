import isArray from 'src/isArray';
import isNull from 'src/isNull';

export default value =>
  !isNull(value)
  && typeof value === 'object'
  && !isArray(value);