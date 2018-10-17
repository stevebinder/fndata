import compose from 'src/compose';
import slice from 'src/slice';
import toString from 'src/toString';
import upper from 'src/upper';

export default compose(
  toString,
  value => {
    const first = slice(value, 0, 1).toUpperCase();
    const rest = slice(value, 1);
    return `${first}${rest}`;
  },
);