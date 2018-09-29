import isFunction from 'src/isFunction';

export default function attempt(method, ...catchers) {
  if (!isFunction(method)) {
    return method;
  }
  try {
    return method();
  } catch(error) {
    if (!catchers.length) {
      return;
    }
    for (let index = 0; index < catchers.length; index += 1) {
      const catcher = catchers[index];
      if (!isFunction(catcher)) {
        return catcher;
      }
      try {
        return catcher(error);
      } catch(error2) {}
    }
    throw error;
  }
}