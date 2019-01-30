import curry from '../curry';
import isString from '../isString';
import slice from '../slice';
import toString from '../toString';

export default (value, max, characters = '...') => curry(
  value,
  toString,
  [slice, 0, max],
  sliced => sliced === value
    ? sliced
    : `${sliced}${characters}`,
);
