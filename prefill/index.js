import toString from '../toString';

export default (value, length = 0, filler = ' ') => {
  let str = toString(value);
  while (str.length < length) {
    str = `${filler}${str}`;
  }
  return str;
}
