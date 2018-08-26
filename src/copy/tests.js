const copy = require('./index');

module.exports = {
  'copy undefined': [
    undefined,
    () => copy(undefined),
  ],
  'copy null': [
    null,
    () => copy(null),
  ],
  'copy a string': [
    true,
    () => {
      const str = 'abc';
      return str === copy(str);
    },
  ],
  'copy a number': [
    true,
    () => {
      const num = 1;
      return num === copy(num);
    },
  ],
  'copy an array': [
    false,
    () => {
      const ary = [1, 2, 3];
      return ary === copy(ary);
    },
  ],
  'copy a function': [
    false,
    () => {
      const fn = () => {};
      return fn === copy(fn);
    },
  ],
  'copy an object': [
    true,
    () =>  {
      const original = { a: { b: true } };
      const duplicate = copy(original);
      return original.a.b === true
        && duplicate.a.b === true
        && original.a !== duplicate.a;
    },
  ],
};