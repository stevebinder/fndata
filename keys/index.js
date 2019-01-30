import curry from '../curry';
import entries from '../entries';
import map from '../map';

export default value => curry(
  value,
  entries,
  [map, item => item.key],
);
