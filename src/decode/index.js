import attempt from 'src/attempt';
import isEmpty from 'src/isEmpty';

export default value => {
  const decoded = attempt(() => JSON.parse(value));
  if (isEmpty(decoded)) {
    return;
  }
  return decoded;
};