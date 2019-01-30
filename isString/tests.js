import isString from './';

export default {
  'is a string': [
    true,
    () => isString(''),
    () => isString('a'),
  ],
  'is not a string': [
    false,
    () => isString(),
    () => isString(undefined),
    () => isString(null),
    () => isString(true),
    () => isString(false),
    () => isString(0),
    () => isString(NaN),
    () => isString(Infinity),
    () => isString({}),
    () => isString([]),
    () => isString(() => {}),
    () => isString(/a/),
  ],
};