/// Number of the pull request on GitHub.
/// In CircleCI pull request number is extracted from `CI_PULL_REQUEST` environment variable.
/// Which is a link to the pull request of the current job.
/// In TravicCI `TRAVIS_PULL_REQUEST` environment varialbe is used.
const BUILD_PR_NUM =
    (process.env.CI_PULL_REQUEST ? parseInt(process.env.CI_PULL_REQUEST.match(/\/pull\/([0-9]+)$/)[1], 10) : 0)
    || parseInt(process.env.TRAVIS_PULL_REQUEST, 10)

    /// Will also try `BUILD_PR_NUM` environment variable.
    /// Otherwise defaults to `0`.
    || process.env.BUILD_PR_NUM
    || 0; // Has to default to falsy, because it is used in `IS_PR` variable.

module.exports = BUILD_PR_NUM;
