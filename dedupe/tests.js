import dedupe from './';

export default {
  'array': [
    [1, true, null, 'ok'],
    () => dedupe([1, true, null, true, 'ok', true, 'ok', 1]),
  ],
  'string': [
    'cat',
    () => dedupe('cacccaatacac'),
  ],
  'number': [
    '123',
    () => dedupe(112213231),
  ],
  'non array or string or number': [
    true,
    () => dedupe(true),
  ],
};