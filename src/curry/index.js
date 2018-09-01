const isArray = require('../isArray');
const isFunction = require('../isFunction');

module.exports = (...args) => {
  const [value, ...items] = args;
  const getNextResult = (result, item) => {
    if (isArray(item)) {
      const [targetMethod, ...targetArgs] = item;
      return targetMethod(result, ...targetArgs);
    }
    if (isFunction(item)) {
      return item(result);
    }
    return item;
  };
  let index = 0;
  let result = value;
  const total = items.length;
  const createPromise = initialPromise =>
    new Promise(async (resolve, reject) => {
      const next = async () => {
        result = await getNextResult(result, items[index]);
        index += 1;
      };
      const run = async () => {
        if (index >= total) {
          resolve(result);
        } else {
          try {
            await next();
            run();
          } catch (error) {
            reject(error);
          }
        }
      };
      result = await initialPromise;
      run();
    });
  while (index < total) {
    const thisResult = getNextResult(result, items[index]);
    index += 1;
    if (thisResult instanceof Promise) {
      return createPromise(thisResult);
    }
    result = thisResult;
  }
  return result;
};
