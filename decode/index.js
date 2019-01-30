import attempt from '../attempt';
import isEmpty from '../isEmpty';

export default value => {
  const decoded = attempt(() => JSON.parse(value));
  if (isEmpty(decoded)) {
    return;
  }
  return decoded;
};