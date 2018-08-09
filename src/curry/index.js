const isArray = require('../isArray');
const isFunction = require('../isFunction');

module.exports = (...args) => {
  const [value, ...items] = args;
  return items.reduce(
    (result, item) => {
      if (isArray(item)) {
        const [targetMethod, ...targetArgs] = item;
        return targetMethod(result, ...targetArgs);
      }
      if (isFunction(item)) {
        return item(result);
      }
      return item;
    },
    value,
  );
};
