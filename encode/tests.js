import encode from './';

export default {
  'should encode a string': [
    '"ok"',
    () => encode('ok'),
  ],
  'should encode a number': [
    '1',
    () => encode(1),
  ],
  'should encode a boolean': [
    'true',
    () => encode(true),
  ],
  'should encode an array': [
    '[1,2,3]',
    () => encode([1, 2, 3]),
  ],
  'should encode an object': [
    '{"a":"ok"}',
    () => encode({ a: 'ok' }),
  ],
  'should return an empty string on error': [
    '',
    () => {
      const obj = {};
      obj.a = { b: obj };
      return encode(obj);
    },
  ],
  'should return an empty string if null or undefined': [
    '',
    () => encode(),
    () => encode(null),
  ],
};