import isEqual from './';

export default {
  'compare exact values': [
    true,
    () => isEqual(true, true),
    () => isEqual(1, 1),
    () => isEqual(undefined, undefined),
    () => isEqual(NaN, NaN),
    () => isEqual(),
    () => {
      const fn = () => {};
      return isEqual(fn, fn);
    },
  ],
  'compare matching arrays': [
    true,
    () => isEqual([1, 2], [1, 2]),
  ],
  'compare different arrays': [
    false,
    () => isEqual([1, 2], [1, 2, 3]),
    () => isEqual([1, 2, 3], [1, 2]),
    () => isEqual([1, 2], [3, 4]),
  ],
  'compare matching objects': [
    true,
    () => isEqual({ a: 1 }, { a: 1 }),
    () => isEqual({ a: { b: 1 } }, { a: { b: 1 } }),
  ],
  'compare different objects': [
    false,
    () => isEqual({ a: 1 }, { a: 2 }),
    () => isEqual({ a: 1 }, { b: 1 }),
    () => isEqual({ a: { b: 1 } }, { a: { b: 2 } }),
    () => isEqual({ a: { b: 1 } }, { a: { c: 1 } }),
  ],
};