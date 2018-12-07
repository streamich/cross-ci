const list = [
    'MONTH',
    'YEAR',
    'TIME',
    'TIMESTAMP',
    'CI_PLATFORM',
    'CI_NAME',
    'GIT_REMOTE',
    'GIT_PLATFORM',
    'RELEASE_BRANCHES',
    'PROJECT_NAME',
    'PROJECT_VERSION',
    'PROJECT_OWNER',
    'PROJECT_SLUG',
    'PROJECT_URL',
    'JOB_NUM',
    'JOB_URL',
    'BUILD_DIR',
    'BUILD_BRANCH',
    'BUILD_NUM',
    'BUILD_PR_NUM',
    'BUILD_URL',
    'BUILD_COMMIT',
    'BUILD_COMMIT_URL',
    'BUILD_COMMIT_PR_URL',
    'BUILD_PR_URL',
    'BRANCH_PRODUCTION',
    'BRANCH_STAGING',
    'BRANCH_BUILD',
    'BRANCH_URL',
    'IS_CI',
    'IS_PR',
    'IS_RELEASE',
    'BUILD_VERSION',
    'UPLOAD_PATH',
    'GITHUB_TOKEN',
];

const createVars = (ci = {}) => {
    for (const name of list) {
        // eslint-disable-next-line import/no-dynamic-require
        ci[name] = require('./var/' + name)(ci);
    }

    return ci;
};

module.exports = createVars;
