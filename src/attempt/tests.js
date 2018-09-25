import isError from 'src/isError';
import attempt from './';

export default {
  'return the value if the supplied method is not a function': [
    1,
    () => attempt(1),
  ],
  'return the method result on success': [
    1,
    () => attempt(() => 1),
  ],
  'return the catch value on error': [
    1,
    () => attempt(() => a(), 1),
  ],
  'return the catch method result on error': [
    1,
    () => attempt(() => a(), () => 1),
  ],
  'pass any error to the catch method': [
    true,
    () => attempt(() => a(), error => isError(error)),
  ],
  'run a function with an error silently': [
    1,
    () => {
      try {
        attempt(() => a());
        return 1;
      } catch (error) {
        return 2;
      }
    },
  ],
};