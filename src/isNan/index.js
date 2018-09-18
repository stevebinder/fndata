const isUndefined = require('../isUndefined');

module.exports = value => typeof value === 'number' && isNaN(value);