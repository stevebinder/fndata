import entries from 'src/entries';
import isArray from 'src/isArray';
import isFunction from 'src/isFunction';
import isNumber from 'src/isNumber';
import isString from 'src/isString';
import isUndefined from 'src/isUndefined';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

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