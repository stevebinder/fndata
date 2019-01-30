import compose from '../compose';
import curry from '../curry';
import map from '../map';
import join from '../join';
import slice from '../slice';
import split from '../split';
import toString from '../toString';
import upper from '../upper';

export default compose(
  toString,
  [split, ' '],
  [map, value => {
    const first = curry(
      value,
      [slice, 0, 1],
      upper,
    );
    const rest = slice(value, 1);
    return `${first}${rest}`;
  }],
  [join, ' '],
);