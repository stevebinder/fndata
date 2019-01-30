import entries from '../entries';
import isArray from '../isArray';
import isFunction from '../isFunction';
import isNumber from '../isNumber';
import isString from '../isString';
import isUndefined from '../isUndefined';
import toNumber from '../toNumber';
import toString from '../toString';

function over(target, method) {
  for (let i = 0; i < target.length; i += 1) {
    method(target[i], i, target);
  }
}

export default (target, method) => {
  if (!isFunction(method)) {
    return;
  }
  if (isArray(target)) {
    over(target, method);
  } else if (isNumber(target)) {
    over(
      toString(target).split(''),
      (item, ...args) => method(toNumber(item), ...args),
    );
  } else if (isString(target)) {
    over(toString(target).split(''), method);
  }
  over(entries(target), method);
}