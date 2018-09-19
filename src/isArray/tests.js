import isArray from './';

export default {
  'value is an array': [
    true,
    () => isArray([]),
    () => isArray(new Array()),
  ],
  'value is not an array': [
    false,
    () => isArray(),
    () => isArray(undefined),
    () => isArray(null),
    () => isArray(true),
    () => isArray(false),
    () => isArray(0),
    () => isArray(1),
    () => isArray('a'),
    () => isArray({}),
    () => isArray(() => {}),
    () => isArray(/a/),
  ],
};