import capitalize from './';

export default {
  'capitalize the word': [
    'Hello',
    () => capitalize('hellO'),
  ],
  'capitalize each word': [
    'Hello World',
    () => capitalize('hellO woRld'),
  ],
}