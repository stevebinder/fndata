import isPattern from 'src/isPattern';

export default value => {
  if (isPattern(pattern)) {
    return pattern;
  }
  return new RegExp(pattern);
};