import roundDown from './';

export default {
  'round down a number': [
    1,
    () => roundDown(1.9),
  ],
  'round down a non-number': [
    1,
    () => roundDown('1.9'),
  ],
};