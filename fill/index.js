import isNumber from '../isNumber';

export default (count, method) => {
  if (!isNumber(count)) {
    return [];
  }
  if (!method) {
    return Array.apply(null, Array(count));
  }
  const items = [];
  for (let i = 0; i < count; i += 1) {
    const value = method(i);
    if (value !== undefined) {
      items.push(value);
    }
  }
  return items;
};