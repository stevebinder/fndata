import prefill from './';
import isString from '../isString';

export default {
  'always convert the value to a string': [
    true,
    () => isString(prefill()),
    () => isString(prefill(2)),
    () => isString(prefill('a')),
  ],
  'prefill to reach length': [
    ' hello',
    () => prefill('hello', 6),
    () => prefill(' hello', 6),
    () => prefill(' hello', 5),
  ],
  'prefill using a special character': [
    '00123',
    () => prefill(123, 5, 0),
    () => prefill(123, 5, '0'),
  ],
};
