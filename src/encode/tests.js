import encode from './';

export default {
  'encode a valid value': [
    '[1,2,3]',
    () => encode([1, 2, 3]),
  ],
  'encode an invalid value': [
    '',
    () => {
      const obj = {};
      obj.a = { b: obj };
      return encode(obj);
    },
  ],
  'encode an empty value': [
    '',
    () => encode(),
    () => encode(null),
  ],
};