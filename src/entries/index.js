const isObject = require('../isObject');

module.exports = target => {
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