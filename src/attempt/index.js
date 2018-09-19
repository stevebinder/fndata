import isFunction from 'src/isFunction';

export default (method, catcher) => {
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