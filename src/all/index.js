import isArray from 'src/isArray';
import isFunction from 'src/isFunction';

export default function all(...args) {
  if (args.length === 2) {
    const [value, method] = args;
    if(
      isArray(value)
      && isFunction(method)
    ) {
      return value.every(method);
    }
  }
  return args.every(item => item);
}