import isNull from 'src/isNull';
import isUndefined from 'src/isUndefined';

export default value => isUndefined(value) || isNull(value);