import entries from 'src/entries';
import isNumber from 'src/isNumber';

export default value => {
  if (!value) {
    return 0;
  }
  if (isNumber(value.length)) {
    return value.length;
  }
  return entries(value).length;
};