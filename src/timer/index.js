import noop from 'src/noop';
import toNumber from 'src/toNumber';

export default (callback = noop, delay = 0, loops = 0) => {
  let count = 0;
  let id = null;
  const total = loops === true
    ? Infinity
    : toNumber(loops);
  const start = () => {
    id = setInterval(() => {
      count += 1;
      if (count === total) {
        clearInterval(id);
      }
      callback(count);
    }, delay);
  };
  const obj = () => {
    clearInterval(id);
    id = null;
    return null;
  };
  obj.cancel = obj;
  obj.reset = () => {
    obj();
    count = 0;
  };
  obj.restart = () => {
    obj();
    count = 0;
    start();
  };
  return obj;
};