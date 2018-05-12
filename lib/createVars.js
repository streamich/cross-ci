const list = [
    'CI_PLATFORM',
    'CI_NAME',
    'MONTH',
    'YEAR',
    'RELEASE_BRANCHES',
    'PROJECT_NAME',
    'PROJECT_VERSION',
    'PROJECT_OWNER',
    'PROJECT_URL',
    'BUILD_BRANCH',
    'BUILD_NUM',
    'BUILD_PR_NUM',
    'BUILD_PR_URL',
    'BUILD_URL',
    'BUILD_COMMIT',
    'BUILD_COMMIT_URL',
    'BUILD_COMMIT_PR_URL',
    'GIT_REMOTE',
    'BRANCH_PRODUCTION',
    'BRANCH_STAGING',
    'BRANCH_BUILD',
    'BRANCH_URL',
    'IS_PR',
    'IS_RELEASE',
    'BUILD_VERSION',
    'UPLOAD_PATH',
    'GITHUB_TOKEN',
];

const createVars = async (ci = {}) => {
    for (const name of list) {
        // eslint-disable-next-line import/no-dynamic-require
        const varDefinition = require('./var/' + name);

        ci[name] = typeof varDefinition === 'function'
            ? await varDefinition(ci)
            : varDefinition;
    }

    return ci;
};

module.exports = createVars;
