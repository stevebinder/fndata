import curry from 'src/curry';
import entries from 'src/entries';
import map from 'src/map';

export default value => curry(
  value,
  entries,
  [map, item => item.key],
);
