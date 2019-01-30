import trimStart from './';

export default {
  'trim everything if only whitespace is provided': [
    '',
    () => trimStart('   \n\t     '),
  ],
  'trim trailing newlines to minimum': [
    'hello world\n\n',
    () => trimStart('    hello world\n\n\n'),
  ],
  'trim trailing spaces to minimum': [
    'hello world ',
    () => trimStart('    hello world      '),
  ],
};