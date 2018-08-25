const curry = require('../curry');
const encode = require('../encode');
const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isObject = require('../isObject');
const isString = require('../isString');
const map = require('../map');
const slice = require('../slice');
const toString = require('../toString');

module.exports = (...args) => {
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