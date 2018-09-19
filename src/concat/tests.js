import concat from './';

export default {
  'all array values': [
    [1, 2, 3, 4],
    () => concat([1], [2], [3, 4]),
  ],
  'mixed values': [
    [true, 0, 'abc', { a: 1 }, null, undefined],
    () => concat([true, 0], 'abc', { a: 1 }, [null], [undefined]),
  ],
};