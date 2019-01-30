import isBoolean from './';

export default {
  'is a boolean': [
    true,
    () => isBoolean(true),
    () => isBoolean(false),
  ],
  'is not a boolean': [
    false,
    () => isBoolean(),
    () => isBoolean(undefined),
    () => isBoolean(null),
    () => isBoolean(0),
    () => isBoolean(NaN),
    () => isBoolean(Infinity),
    () => isBoolean({}),
    () => isBoolean([]),
    () => isBoolean(() => {}),
],
};