import isPattern from './';

export default {
  'is a pattern': [
    true,
    () => isPattern(/a/),
    () => isPattern(new RegExp('a')),
  ],
  'is not a pattern': [
    false,
    () => isPattern(),
    () => isPattern('a'),
  ],
};