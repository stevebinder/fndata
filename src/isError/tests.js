import isError from './';

export default {
  'is an error': [
    true,
    () => isError(new Error()),
  ],
  'is not an error': [
    false,
    () => isError(Error),
    () => isError(1),
  ],
};