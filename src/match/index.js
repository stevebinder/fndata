import isString from 'src/isString';

export default (text, matcher, index = -1) => {
  if (!text || !matcher) {
    return [];
  }
  const pattern = !isString(matcher)
    ? matcher
    : new RegExp(matcher);
  if (pattern.global) {
    let result;
    const results = [];
    while ((result = pattern.exec(text)) !== null) {
      results.push(result[0]);
    }
    if (index !== -1) {
      return results[index];
    }
    return [...results];
  }
  const match = text.match(pattern) || [];
  if (index !== -1) {
    return match[index];
  }
  return [...match];
};