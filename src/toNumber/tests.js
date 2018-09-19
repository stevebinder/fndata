import toNumber from './';

export default {
  'should be a number': [
    1,
    () => toNumber(1),
    () => toNumber('1'),
  ],
  'should be 0': [
    0,
    () => toNumber(),
    () => toNumber(undefined),
    () => toNumber(null),
    () => toNumber(true),
    () => toNumber(false),
    () => toNumber(NaN),
    () => toNumber(Infinity),
    () => toNumber('a'),
    () => toNumber({}),
    () => toNumber([]),
    () => toNumber(() => {}),
    () => toNumber(/a/),
  ],
};