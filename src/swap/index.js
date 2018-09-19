import isArray from 'src/isArray';
import isString from 'src/isString';

export default (target, a, b) => {
  if (isArray(target)) {
    return target.map((item, index) => {
      if (index === a) {
        return target[b];
      }
      if (index === b) {
        return target[a];
      }
      return item;
    });
  }
  if (isString(target)) {
    return target
      .split('')
      .map((item, index) => {
        if (index === a) {
          return target[b];
        }
        if (index === b) {
          return target[a];
        }
        return item;
      })
      .join('');
  }
  return target;
};