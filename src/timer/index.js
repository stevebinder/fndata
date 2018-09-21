import noop from 'src/noop';
import toNumber from 'src/toNumber';

export default (callback = noop, delay = 0, loops = 0) => {
  let count = 0;
  const total = loops === true
    ? Infinity
    : toNumber(loops);
  const id = setInterval(() => {
    count += 1;
    if (count === total) {
      clearInterval(id);
    }
    callback(count - 1);
  }, delay);
  return () => {
    clearInterval(id);
    return null;
  };
};