import compose from 'src/compose';
import curry from 'src/curry';
import map from 'src/map';
import join from 'src/join';
import slice from 'src/slice';
import split from 'src/split';
import toString from 'src/toString';
import upper from 'src/upper';

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