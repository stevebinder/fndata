import toString from './';

export default {
  'should be a non-empty string': [
    'a',
    () => toString('a'),
  ],
  'should be an empty string': [
    '',
    () => toString(),
    () => toString(undefined),
    () => toString(null),
    () => toString(true),
    () => toString(false),
    () => toString(NaN),
    () => toString(Infinity),
    () => toString({}),
    () => toString([]),
    () => toString(() => {}),
    () => toString(/a/),
  ],
};