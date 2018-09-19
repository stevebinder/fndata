import attempt from 'src/attempt';

export default value => attempt(() => JSON.stringify(value), '');
