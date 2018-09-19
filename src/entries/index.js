import isObject from 'src/isObject';

export default target => {
  if (!isObject(target)) {
    return [];
  }
  const items = [];
  for (const key in target) {
    const value = target[key];
    if (value !== undefined) {
      items.push({ key, value });
    }
  }
  return items;
}