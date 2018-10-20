import match from 'src/match';
import trim from 'src/trim';

export default value => {
  const [end = ''] = match(value, /\s+$/);
  return `${trim(value)}${end}`;
};