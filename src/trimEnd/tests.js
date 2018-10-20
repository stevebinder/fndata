import trimEnd from './';

export default {
  'do not trim leading whitespace': [
    '  \n  hello world',
    () => trimEnd('  \n  hello world   '),
  ],
};