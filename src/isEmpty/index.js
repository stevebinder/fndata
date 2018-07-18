const isNull = require('../isNull');
const isUndefined = require('../isUndefined');

module.exports = value => isUndefined(value) || isNull(value);