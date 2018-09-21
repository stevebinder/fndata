import lowercase from './';

export default {
  'lowercase a string': [
    'a',
    () => lowercase('A'),
  ],
  'lowercase a non-string': [
    '{"a":"ok"}',
    () => lowercase({ a: 'OK' }),
  ],
}