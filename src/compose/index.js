const curry = require('../curry');

module.exports = (...args) => value => curry(value, ...args);