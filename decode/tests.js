import decode from './';

export default {
  'valid value': [
    [1, 2, 3],
    () => decode('[1,2,3]'),
  ],
  'invalid value': [
    undefined,
    () => decode('[1x,2,3]'),
  ],
  'null': [
    undefined,
    () => decode(null),
  ],
};