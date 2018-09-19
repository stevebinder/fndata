import isUndefined from 'src/isUndefined';

export default value => typeof value === 'number' && isNaN(value);