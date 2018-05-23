const envCi = require('../envCi');

/// Boolean, `true` if the current build is triggered by a pull request.
const IS_PR = ({BUILD_PR_NUM}) =>
    Boolean(BUILD_PR_NUM)
    || envCi.isPr;

module.exports = IS_PR;
