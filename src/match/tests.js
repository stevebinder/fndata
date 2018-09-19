import match from './';

export default {
  'return an empty array if arguments are not valid': [
    [],
    () => match('', ''),
    () => match('hello world'),
    () => match(),
  ],
  'return matched result for a non-global search using a string': [
    ['hello'],
    () => match('hello world', 'hello'),
  ],
  'return matched result for a non-global search using a pattern': [
    ['hello'],
    () => match('hello world', /hello/),
  ],
  'return matched results for a global search': [
    ['o', 'o'],
    () => match('hello world', /o/g),
  ],
  'return matched results for a global search at a specific index': [
    ['o'],
    () => match('hello world', /o/g, 1),
  ],
  'return matched results for a global search at a specific index': [
    ['o ', 'or'],
    () => match('hello world', /o(.)/g),
  ],
}