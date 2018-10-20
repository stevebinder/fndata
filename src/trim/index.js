import compose from 'src/compose';
import replace from 'src/replace';
import toString from 'src/toString';

export default compose(
  toString,
  [replace, /^\s+/],
  [replace, /\s+$/],
  [replace, /\t/g],
  [replace, /[ ]{2,}/g, ' '],
  [replace, /[\n]{3,}/g, '\n\n'],
  [replace, /[\r]{3,}/g, '\r\r'],
);