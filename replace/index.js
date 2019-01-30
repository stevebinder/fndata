import curry from '../curry';
import isPattern from '../isPattern';
import toPattern from '../toPattern';
import toString from '../toString';

export default (value, replacer = '', replacement = '') => {
  const pattern = isPattern(replacer)
    ? replacer
    : toPattern(replacer, 'ig');
  return curry(
    value,
    toString,
    value => value.replace(pattern, replacement),
  );
};
