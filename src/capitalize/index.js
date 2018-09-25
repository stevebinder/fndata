import compose from 'src/compose';
import slice from 'src/slice';
import toString from 'src/toString';

export default compose(
  toString,
  str => `${slice(str, 0, 1).toUpperCase()}${slice(str, 1)}`,
);