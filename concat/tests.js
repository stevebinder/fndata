import concat from './';

export default {
  'join mixed values': [
    [1, 2, 3, 4, 5],
    () => concat([1, 2], 3, [4, 5]),
  ],
};