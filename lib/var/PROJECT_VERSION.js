/// Semver version of your project. Taken from `package.json`. Othewise
/// defaults to `0.0.0`.
const pkg = require('../pkg');

const PROJECT_VERSION = () =>
    typeof pkg.version === 'string'
        ? pkg.version
        : '0.0.0';

module.exports = PROJECT_VERSION;
