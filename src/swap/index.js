import map from 'src/map';
import isArray from 'src/isArray';
import isEmpty from 'src/isEmpty';
import isString from 'src/isString';

export default (target, a, b) => {
  if (isArray(target) || isString(target)) {
    const length = target.length;
    if (
      !isEmpty(a)
      && !isEmpty(b)
      && a >= 0
      && b >= 0
      && a < length
      && b < length
    ) {
      return map(
        target,
        (item, index) => {
          if (index === a) {
            return target[b];
          }
          if (index === b) {
            return target[a];
          }
          return item;
        },
      );
    }
  }
  return target;
};