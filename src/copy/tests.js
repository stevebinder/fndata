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
    false,
    () =>  {
      const obj = { a: { b: 2 } };
      const dup = copy(obj);
      if (!obj || !dup) {
        return true;
      }
      if (obj === dup) {
        return true;
      }
      if (obj && dup && obj.b && dup.b && obj.b === dup.b) {
        return true;
      }
      return false;
    },
  ],
};