import range from './';

export default {
  'constrain between two numbers': [
    4,
    () => range(100, 4, 4),
    () => range(4, 4, 4),
    () => range(1000, 4, 1),
  ],
  'return the value because one or more numbers is missing': [
    2,
    () => range(2),
    () => range(2, 3),
    () => range(2, 'a', true),
  ],
};
