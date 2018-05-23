const envCi = require('../envCi');

/// CI service Commercial name (e.g. `Travis`, `CircleCI`, `TeamCity`).
const CI_NAME = ({CI_PLATFORM}) => {
    switch (CI_PLATFORM) {
    case 'circle': return 'CircleCI';
    case 'travis': return 'Travis';
    case 'teamcity': return 'TeamCity';
    case 'gitlab': return 'Gitlab';
    default: return envCi.name;
    }
};

module.exports = CI_NAME;
