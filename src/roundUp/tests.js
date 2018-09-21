import roundUp from './';

export default {
  'round up a number': [
    2,
    () => roundUp(1.1),
  ],
  'round up a non-number': [
    2,
    () => roundUp('1.1'),
  ],
};