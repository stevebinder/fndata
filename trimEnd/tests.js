import trimEnd from './';

export default {
  'trim everything if only whitespace is provided': [
    '',
    () => trimEnd('   \n\t     '),
  ],
  'trim leading newlines to minimum': [
    '\n\nhello world',
    () => trimEnd('\n\n\nhello world    '),
  ],
  'trim trailing spaces to minimum': [
    ' hello world',
    () => trimEnd('      hello world    '),
  ],
};