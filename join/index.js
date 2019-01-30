import curry from '../curry';
import encode from '../encode';
import isArray from '../isArray';
import isNumber from '../isNumber';
import isObject from '../isObject';
import isString from '../isString';
import map from '../map';
import slice from '../slice';
import toString from '../toString';

export default (...args) => {
  const values = (() => {
    if (args.length <= 2) {
      if (isArray(args[0])) {
        return args[0];
      }
      return [args[0]];
    }
    return curry(
      args,
      [slice, 0, args.length - 1],
      [map, item => {
        if (isString(item) || isNumber(item)) {
          return item;
        }
        return encode(item);
      }],
    );
  })();
  const delimeter = args.length >= 2
    ? toString(args[args.length - 1])
    : '';
  return values.join(delimeter);
};