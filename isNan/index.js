import isUndefined from '../isUndefined';

export default value => typeof value === 'number' && isNaN(value);