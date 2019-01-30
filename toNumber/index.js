export default value => {
  if (value === true) {
    return 0;
  }
  const result = +value;
  if (result > 0 && result < Infinity) {
    return result;
  }
  return 0;
};