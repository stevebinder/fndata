import compose from '../compose';
import toString from '../toString';

export default compose(
  toString,
  value => value.toLowerCase(),
);