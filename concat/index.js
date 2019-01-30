import isArray from '../isArray';
import reduce from '../reduce';

export default (...values) => reduce(
  values,
  [],
  (result, item) => isArray(item)
    ? ([...result, ...item])
    : [...result, item],
);