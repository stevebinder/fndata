const isFunction = require('../isFunction');

const memo = (fn) => {
  const cache = new Map();
  const cleanCache = () => {
    if (cache.size > 1000) {
      let firstKey;
      try {
        cache.forEach((value, key) => {
          firstKey = key;
          throw new Error();
        });
      } catch (e) {}
      cache.delete(firstKey);
    }
  };
  const getCache = args => cache.get(getKey(args));
  const getKey = args => args
    .map(arg => JSON.stringify(arg) || 'undefined')
    .join('-');
  const hasCache = args => {
    const key = getKey(args);
    return key ? cache.has(key) : false;
  };
  const setCache = (args, value) => cache.set(getKey(args), value);
  return (...args) => {
    if (hasCache(args)) {
      return getCache(args);
    } else {
      const result = fn(...args);
      cleanCache();
      setCache(args, result);
      return result;
    }
  };
}

module.exports = value =>
  isFunction(value)
    ? memo(value)
    : () => value;