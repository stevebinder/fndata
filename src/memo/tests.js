import memo from './';
import isFunction from 'src/isFunction';

export default {
  'should always return a function': [
    true,
    () => isFunction(memo(() => {})),
    () => isFunction(memo(1)),
  ],
  'for non-function inputs, return a function that returns the input': [
    true,
    () => {
      const method = memo(true);
      return method();
    },
  ],
  'should recalculate if arguments change': [
    10,
    () => {
      const method = memo((a, b) => a + b);
      return method(1, 2) + method(3, 4);
    },
  ],
  'should not recalculate if arguments do not change': [
    1,
    () => {
      let run = 0;
      const method = memo(() => run += 1);
      const a = {}
      method(true, 1, a);
      method(true, 1, a);
      return run;
    },
  ],
};