import capitalize from './';

export default {
  'capitalize the first letter only': [
    'HellO',
    () => capitalize('hellO'),
  ],
};