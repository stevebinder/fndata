import curry from 'src/curry';
import match from 'src/match';
import replace from 'src/replace';
import test from 'src/test';
import trim from 'src/trim';

export default value => {
  if (test(value, /^\s*$/)) {
    return trim(value);
  }
  const start = curry(
    match(value, /^\s+/)[0] || '',
    [replace, /^[ ]{2,}/, ' '],
    [replace, /^[\n]{3,}/, '\n\n'],
    [replace, /^[\r]{3,}/, '\r\r'],
  );
  return `${start}${trim(value)}`;
};