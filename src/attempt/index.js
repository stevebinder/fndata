const isFunction = require('../isFunction');

module.exports = (method, catcher) => {
  if (!isFunction(method)) {
    return;
  }
  try {
    method();
  } catch(e) {
    if (isFunction(catcher)) {
      catcher(e);
    }
  }
};