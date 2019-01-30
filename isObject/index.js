import isArray from '../isArray';
import isNull from '../isNull';

export default value =>
  !isNull(value)
  && typeof value === 'object'
  && !isArray(value);