/* eslint-disable complexity */
const {execSync} = require('child_process');
const envCi = require('../envCi');

/// Name of the Git branch which is currently being built.
/// In CircleCI the `CIRCLE_BRANCH` environment variable is used.
/// In TravisCI it is set to `TRAVIS_PULL_REQUEST_BRANCH` if the build originated
/// as a pull request, or `TRAVIS_BRANCH` otherwise.
/// If `BUILD_BRANCH` environment variable is present, uses that.
const BUILD_BRANCH = () => {
    let branch = process.env.CIRCLE_BRANCH
        || (process.env.TRAVIS
            ? (process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH)
            : '')
        || process.env.CI_COMMIT_REF_NAME // Gitlab
        || process.env.BUILD_BRANCH;

    if (branch) {
        return branch;
    }

    if (envCi.branch) {
        return envCi.branch;
    }

    try {
        branch = execSync('git rev-parse --abbrev-ref HEAD 2>/dev/null')
            .toString()
            .trim();
    // eslint-disable-next-line no-empty
    } catch (error) {}

    return branch || '___UNKNOWN_BUILD_BRANCH___';
};

module.exports = BUILD_BRANCH;
