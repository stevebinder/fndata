import curry from '../curry';

export default (...args) => value => curry(value, ...args);