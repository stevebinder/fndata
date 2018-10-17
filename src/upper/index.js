import compose from 'src/compose';
import toString from 'src/toString';

export default compose(
  toString,
  value => value.toUpperCase(),
);
