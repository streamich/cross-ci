const envCi = require('../envCi');

/// Standardized CI service name (e.g. `travis`, `circle`, `gitlab`).
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
