import attempt from './';

export default {
  'return the value if the supplied method is not a function': [
    'ok',
    () => attempt('ok'),
  ],
  'return the method return value on success': [
    'ok',
    () => attempt(() => 'ok'),
  ],
  'return the catch method return value on error': [
    'ok',
    () => attempt(() => a(), () => 'ok'),
  ],
  'run a function with an error silently': [
    undefined,
    () => attempt(() => a()),
  ],
  'return default value on error': [
    'ok',
    () => attempt(() => a(), 'ok'),
  ],
};