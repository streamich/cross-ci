/// A string identifying the CI platform.
///
/// - `circle` for CircleCI
/// - `travis` for TravisCI
const CI_PLATFORM = () => {
    if (process.env.CIRCLECI) {
        return 'circle';
    }

    if (process.env.TRAVIS) {
        return 'travis';
    }

    return '___UNKNOWN_CI_PLATFORM___';
};

module.exports = CI_PLATFORM;
