const {execSync} = require('child_process');

/// Name of the Git branch which is currently being built.
/// In CircleCI the `CIRCLE_BRANCH` environment variable is used.
/// In TravisCI it is set to `TRAVIS_PULL_REQUEST_BRANCH` if the build originated
/// as a pull request, or `TRAVIS_BRANCH` otherwise.
/// If `BUILD_BRANCH` environment variable is present, uses that.
///
/// ```shell
/// ci echo --message "branch: \${BUILD_BRANCH}"
/// ```
const BUILD_BRANCH = () => {
    let branch = process.env.CIRCLE_BRANCH
        || (process.env.TRAVIS
            ? (process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH)
            : '')
        || process.env.BUILD_BRANCH;

    if (!branch) {
        try {
            branch = execSync('git branch')
                .toString()
                .match(/\*\s*([^\s]+)\s/)[1]
                .trim();
        // eslint-disable-next-line no-empty
        } catch (error) {}
    }

    return branch || '___UNKNOWN_BUILD_BRANCH___';
};

module.exports = BUILD_BRANCH;
