import curry from 'src/curry';
import isPattern from 'src/isPattern';
import toPattern from 'src/toPattern';
import toString from 'src/toString';

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
