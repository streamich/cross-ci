/// Semver version of your project. Taken from `package.json`.
const pkg = require('../pkg');

const PROJECT_VERSION = typeof pkg.version === 'string'
    ? pkg.version
    : '___UNKNOWN_PROJECT_VERSION___';

module.exports = PROJECT_VERSION;
