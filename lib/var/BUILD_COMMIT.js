const {execSync} = require('child_process');

const getCommit = () => {
    try {
        return execSync('git rev-parse HEAD').toString().trim();
    } catch (error) {
        return '';
    }
};

/// SHA1 of the Git commit being built.
const BUILD_COMMIT =
    process.env.CIRCLE_SHA1
    || getCommit()
    || '___UNKNOWN_GIT_COMMIT___';

module.exports = BUILD_COMMIT;
