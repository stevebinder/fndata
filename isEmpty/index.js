import isNull from '../isNull';
import isUndefined from '../isUndefined';

export default value => isUndefined(value) || isNull(value);