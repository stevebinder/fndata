import curry from '../curry';
import toNumber from '../toNumber';

export default (value, direction = 0) => curry(
  value,
  toNumber,
  result => {
    if (direction === 0) {
      return Math.round(result);
    }
    if (direction === true || direction > 0) {
      return Math.ceil(result);
    }
    if (direction === false || direction < 0) {
      return Math.floor(result);
    }
    return Math.round(result);
  },
);