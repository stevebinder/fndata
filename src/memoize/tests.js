import memoize from './';
import isFunction from 'src/isFunction';

export default {
  'should always return a function': [
    true,
    () => isFunction(memoize(() => {})),
    () => isFunction(memoize(1)),
  ],
  'for non-function inputs, return a function that returns the input': [
    true,
    () => {
      const method = memoize(true);
      return method();
    },
  ],
  'should recalculate if arguments change': [
    10,
    () => {
      const method = memoize((a, b) => a + b);
      return method(1, 2) + method(3, 4);
    },
  ],
  'should not recalculate if arguments do not change': [
    1,
    () => {
      let run = 0;
      const method = memoize(() => run += 1);
      const a = {}
      method(true, 1, a);
      method(true, 1, a);
      return run;
    },
  ],
};