import attempt from '../attempt';
import curry from '../curry';
import isEmpty from '../isEmpty';

export default value => curry(
  value === null ? undefined : value,
  result => attempt(
    () => JSON.stringify(result),
    '',
  ),
  result => isEmpty(result) ? '' : result,
);
