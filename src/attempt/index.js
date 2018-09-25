import isFunction from 'src/isFunction';

export default (method, catcher) => {
  if (!isFunction(method)) {
    return method;
  }
  try {
    return method();
  } catch(error) {
    return isFunction(catcher)
      ? catcher(error)
      : catcher;
  }
};