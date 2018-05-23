const envCi = require('../envCi');

/// CI service build number.
const BUILD_NUM = () =>
    process.env.BUILD_NUM
    || process.env.CIRCLE_BUILD_NUM // CircleCI
    || process.env.TRAVIS_BUILD_NUMBER // Travis
    || process.env.CI_JOB_ID // Gitlab
    || process.env.BUILD_NUMBER // TeamCity convention
    || envCi.build
    || 0;

module.exports = BUILD_NUM;
