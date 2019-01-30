import entries from '../entries';
import isNumber from '../isNumber';

export default value => {
  if (!value) {
    return 0;
  }
  if (isNumber(value.length)) {
    return value.length;
  }
  return entries(value).length;
};