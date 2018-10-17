import upper from './';

export default {
  'uppercase a string': [
    'HELLO',
    () => upper('hello'),
    () => upper('hElLo'),
  ],
  'uppercase a non string': [
    'TRUE',
    () => upper(true),
  ],
};