const BUILD_COMMIT = require('./BUILD_COMMIT');

/// First 7 chars of SHA1 of the Git commit being built.
const BUILD_COMMIT7 = () =>
    (BUILD_COMMIT() || '').slice(0, 7);

module.exports = BUILD_COMMIT7;
