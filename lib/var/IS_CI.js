/// Boolean indicating if script runs in a CI environment.
const IS_CI = ({CI_PLATFORM}) =>
    Boolean(
        (CI_PLATFORM && (CI_PLATFORM !== '___UNKNOWN_CI_PLATFORM___'))
        || process.env.CI
    );

module.exports = IS_CI;
