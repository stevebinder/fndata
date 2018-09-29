import slice from 'src/slice';
import toString from 'src/toString';

export default function capitalize(value) {
  const str = toString(value);
  const first = slice(str, 0, 1).toUpperCase();
  const rest = slice(str, 1);
  return `${first}${rest}`;
}