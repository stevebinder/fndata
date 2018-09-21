import uppercase from './';

export default {
  'uppercase a string': [
    'HELLO',
    () => uppercase('hello'),
    () => uppercase('hElLo'),
  ],
  'uppercase a non string': [
    'TRUE',
    () => uppercase(true),
  ],
};