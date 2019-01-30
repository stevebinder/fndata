import isNull from './';

export default {
  'return true for undefined': [
    true,
    () => isNull(null),
  ],
  'return false for non-undefined': [
    false,
    () => isNull(),
    () => isNull(undefined),
    () => isNull(true),
    () => isNull(false),
    () => isNull(0),
    () => isNull(1),
    () => isNull(''),
    () => isNull('a'),
    () => isNull([]),
    () => isNull({}),
    () => isNull(() => {}),
    () => isNull(/a/),
  ],
};