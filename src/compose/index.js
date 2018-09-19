import curry from 'src/curry';

export default (...args) => value => curry(value, ...args);