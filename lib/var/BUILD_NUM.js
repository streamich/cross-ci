const envCi = require('../envCi');

/// Build number, a numeric value uniquely identifying current build.
/// In CircleCI equals to `CIRCLE_BUILD_NUM` environment variable.
/// In TravisCI equals to `TRAVIS_BUILD_NUMBER` environment variable.
/// In TeamCity equals to `BUILD_NUMBER` environment variable.
/// Otherwise tries `BUILD_NUM` environment variable.
/// If not build number detected, defaults to `0`.
const BUILD_NUM = () =>
    process.env.BUILD_NUM
    || process.env.CIRCLE_BUILD_NUM // CircleCI
    || process.env.TRAVIS_BUILD_NUMBER // Travis
    || process.env.CI_JOB_ID // Gitlab
    || process.env.BUILD_NUMBER // TeamCity convention
    || envCi.build
    || 0;

module.exports = BUILD_NUM;
