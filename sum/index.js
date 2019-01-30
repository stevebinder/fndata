import isNumber from '../isNumber';
import reduce from '../reduce';

export default (...values) => reduce(
  values,
  (sum, num) => isNumber(num) ? sum + num : sum,
  0,
);