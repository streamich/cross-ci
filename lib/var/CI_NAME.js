/// A user-friendly CI display name.
///
/// - `CircleCI` for CircleCI
/// - `Travis` for TravisCI
const CI_NAME = ({CI_PLATFORM}) => {
    switch (CI_PLATFORM) {
    case 'circle':
        return 'CircleCI';
    case 'travis':
        return 'Travis';
    default:
        return '___UNKNOWN_CI_NAME__';
    }
};

module.exports = CI_NAME;
