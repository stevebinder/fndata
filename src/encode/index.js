import attempt from 'src/attempt';
import curry from 'src/curry';
import isEmpty from 'src/isEmpty';

export default value => curry(
  value === null ? undefined : value,
  result => attempt(
    () => JSON.stringify(result),
    '',
  ),
  result => isEmpty(result) ? '' : result,
);
