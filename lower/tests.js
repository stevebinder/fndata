import lower from './';

export default {
  'lowercase a string': [
    'a',
    () => lower('A'),
  ],
  'lowercase a non-string': [
    '{"a":"ok"}',
    () => lower({ a: 'OK' }),
  ],
}