import curry from 'src/curry';
import encode from 'src/encode';
import isArray from 'src/isArray';
import isNumber from 'src/isNumber';
import isObject from 'src/isObject';
import isString from 'src/isString';
import map from 'src/map';
import slice from 'src/slice';
import toString from 'src/toString';

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