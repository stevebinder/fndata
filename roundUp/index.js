import curry from '../curry';
import toNumber from '../toNumber';

export default value => curry(
  value,
  toNumber,
  result => Math.ceil(result),
);