const envCi = require('../envCi');

/// A string identifying the CI platform.
///
/// - `circle` for CircleCI
/// - `travis` for TravisCI
/// - `teamcity` for TeamCity
/// - `gitlab` for Gitlab
const CI_PLATFORM = () => {
    if (process.env.CIRCLECI) {
        return 'circle';
    }

    if (process.env.TRAVIS) {
        return 'travis';
    }

    if (process.env.TEAMCITY_VERSION) {
        return 'teamcity';
    }

    if (process.env.GITLAB_CI) {
        return 'gitlab';
    }

    return envCi.service || '___UNKNOWN_CI_PLATFORM___';
};

module.exports = CI_PLATFORM;
