import match from 'src/match';
import test from 'src/test';
import trim from 'src/trim';

export default value => {
  if (test(value, /^\s*$/)) {
    return trim(value);
  }
  const [start = ''] = match(value, /^\s+/);
  return `${start}${trim(value)}`;
};