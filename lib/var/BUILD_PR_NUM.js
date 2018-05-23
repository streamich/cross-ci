const envCi = require('../envCi');

/// Pull request (aka Merge request) number. Defaults to `0`.
const BUILD_PR_NUM = () =>
    (process.env.CI_PULL_REQUEST ? parseInt(process.env.CI_PULL_REQUEST.match(/\/pull\/([0-9]+)$/)[1], 10) : 0) // CircleCI
    || parseInt(process.env.TRAVIS_PULL_REQUEST, 10)
    || process.env.BUILD_PR_NUM
    || envCi.pr
    || 0; // Has to default to falsy, because it is used in `IS_PR` variable.

module.exports = BUILD_PR_NUM;
