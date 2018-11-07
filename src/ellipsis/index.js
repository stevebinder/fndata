import curry from 'src/curry';
import isString from 'src/isString';
import slice from 'src/slice';
import toString from 'src/toString';

export default (value, max, characters = '...') => curry(
  value,
  toString,
  [slice, 0, max],
  sliced => sliced === value
    ? sliced
    : `${sliced}${characters}`,
);
