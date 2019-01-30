import isNumber from '../isNumber';

export default (value, a, b) => {
  if (!isNumber(value) || !isNumber(a) || !isNumber(b)) {
    return value;
  }
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min;
  }
  return value;
};
