import isError from 'src/isError';
import attempt from './';

export default {
  'return the value for non-function input': [
    1,
    () => attempt(1),
  ],
  'return the function result': [
    1,
    () => attempt(() => 1),
  ],
  'return undefined if error has no catch method': [
    undefined,
    () => attempt(() => a()),
  ],
  'return the catch value if error': [
    1,
    () => attempt(
      () => a(),
      1,
    ),
  ],
  'return the catch method result if error': [
    1,
    () => attempt(
      () => a(),
      () => 1,
    ),
  ],
  'return the final catch value result if error': [
    1,
    () => attempt(
      () => a(),
      () => a(),
      1,
    ),
  ],
  'return the final catch method result if error': [
    1,
    () => attempt(
      () => a(),
      () => a(),
      () => 1,
    ),
  ],
  'pass errors to the catch methods': [
    true,
    () => attempt(
      () => a(),
      error => isError(error),
    ),
  ],
  'do not throw an error if the first method fails': [
    1,
    () => {
      try {
        attempt(() => a());
        return 1;
      } catch (error) {}
    },
  ],
  'throw an error if the last method fails': [
    2,
    () => {
      try {
        attempt(
          () => a(),
          () => a(),
        );
      } catch (error) {
        return 2;
      }
    },
  ],
};