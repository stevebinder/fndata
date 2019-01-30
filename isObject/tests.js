import isObject from './';

export default {
  'return true for object': [
    true,
    () => isObject({}),
    () => isObject(new Object()),
    () => isObject({ a: 1 }),
    () => isObject(/a/),
  ],
  'return false for non-object': [
    false,
    () => isObject(),
    () => isObject(null),
    () => isObject(true),
    () => isObject(false),
    () => isObject(0),
    () => isObject(1),
    () => isObject(''),
    () => isObject('a'),
    () => isObject([]),
    () => isObject(() => {}),
  ],
};