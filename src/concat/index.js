import isArray from 'src/isArray';
import reduce from 'src/reduce';

export default (...values) => reduce(
  values,
  [],
  (result, item) => isArray(item)
    ? ([...result, ...item])
    : [...result, item],
);