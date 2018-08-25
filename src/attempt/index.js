const isFunction = require('../isFunction');

module.exports = (method, catcher) => {
  if (!isFunction(method)) {
    return method;
  }
  try {
    return method();
  } catch(e) {
    if (isFunction(catcher)) {
      return catcher(e);
    } else {
      return catcher;
    }
  }
};