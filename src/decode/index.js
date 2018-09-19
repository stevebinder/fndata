import attempt from 'src/attempt';

export default value => attempt(() => JSON.parse(value));
