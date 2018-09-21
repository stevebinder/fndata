import curry from 'src/curry';
import toNumber from 'src/toNumber';

export default value => curry(
  value,
  toNumber,
  result => Math.floor(result),
);