import curry from '../curry';
import match from '../match';
import replace from '../replace';
import test from '../test';
import trim from '../trim';

export default value => {
  if (test(value, /^\s*$/)) {
    return trim(value);
  }
  const end = curry(
    match(value, /\s+$/)[0] || '',
    [replace, /[ ]{2,}$/, ' '],
    [replace, /[\n]{3,}$/, '\n\n'],
    [replace, /[\r]{3,}$/, '\r\r'],
  );
  return `${trim(value)}${end}`;
};