const isArray = require('../isArray');
const loop = require('../loop');

module.exports = (array, ...rest) => {
  if (!isArray(array)) {
    return [];
  }
  const items = [...array];
  loop(rest, value => {
    if (value !== undefined) {
      items.push(value);
    }
  });
  return items;
};