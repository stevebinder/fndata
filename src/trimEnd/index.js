import match from 'src/match';
import trim from 'src/trim';

export default value => {
  const [start = ''] = match(value, /^\s+/);
  return `${start}${trim(value)}`;
};