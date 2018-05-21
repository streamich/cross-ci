const {execSync} = require('child_process');

const getCommit = () => {
    try {
        return execSync('git rev-parse HEAD 2>/dev/null').toString().trim();
    } catch (error) {
        return '';
    }
};

/// SHA1 of the Git commit being built.
const BUILD_COMMIT = () =>
    process.env.CIRCLE_SHA1
    || process.env.TRAVIS_PULL_REQUEST_SHA
    || process.env.TRAVIS_COMMIT
    || process.env.CI_COMMIT_SHA // Gitlab
    || getCommit()
    || '___UNKNOWN_BUILD_COMMIT___';

module.exports = BUILD_COMMIT;
