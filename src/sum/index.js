import isNumber from 'src/isNumber';
import reduce from 'src/reduce';

export default (...values) => reduce(
  values,
  (sum, num) => isNumber(num) ? sum + num : sum,
  0,
);