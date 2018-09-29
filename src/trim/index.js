import toString from 'src/toString';

export default function trim(value) {
  return toString(value)
    .replace(/^\s+/, '')
    .replace(/\s+$/, '');
}