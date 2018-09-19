import isFunction from './';

export default {
  'is a function': [
    true,
    () => isFunction(() => {}),
  ],
  'is not a function': [
    false,
    () => isFunction(),
    () => isFunction(undefined),
    () => isFunction(null),
    () => isFunction(true),
    () => isFunction(false),
    () => isFunction(0),
    () => isFunction(1),
    () => isFunction('a'),
    () => isFunction({}),
    () => isFunction([]),
    () => isFunction(/a/),
  ],
};