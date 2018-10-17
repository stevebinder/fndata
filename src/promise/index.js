import noop from 'src/noop';

export default (callback = noop) => {
  const catchList = [];
  const finallyList = [];
  const thenList = [];
  const obj = () => {
    obj.fulfilled = true;
  };
  const runList = targetList => [...targetList, ...finallyList]
    .forEach(item => obj.result = item(...args));
  obj.resolve = value => {
    if (obj.fulfilled) {
      throw new Error('Cannot call promise.resolve because the promise is already fulfilled.');
    }
    obj.fulfilled = true;
    obj.result = value;
    runList(thenList);
  };
  obj.reject = value => {
    if (obj.fulfilled) {
      throw new Error('Cannot call promise.reject because the promise is already fulfilled.');
    }
    obj.fulfilled = true;
    obj.result = value;
    runList(thenList);
  };
  setTimeout(() => callback(obj.resolve, obj.reject));
  obj.cancel = obj;
  obj.catch = callback => catchList.push(callback);
  obj.finally = callback => finallyList.push(callback);
  obj.then = callback => thenList.push(callback);
  return obj;
};