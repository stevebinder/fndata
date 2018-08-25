const attempt = require('../attempt');

module.exports = value => attempt(() => JSON.stringify(value), '');
