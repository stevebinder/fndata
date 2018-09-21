import curry from 'src/curry';
import lowercase from 'src/lowercase';
import slice from 'src/slice';
import split from 'src/split';
import test from 'src/test';
import toString from 'src/toString';
import uppercase from 'src/uppercase';

export default value => compose(
  toString,
  [split, ''],
  [map, word => {
    if (test(word, /[A-Z]/)) {
      return word;
    }
    const first = curry(
      word,
      [slice, 0, 1],
      uppercase,
    );
    const rest = curry(
      word,
      [slice, 1],
      lowercase,
    );
    return `${first}${rest}`;
  }],
);
