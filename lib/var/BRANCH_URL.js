const BRANCH_URL = ({GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME, BUILD_BRANCH}) => {
    switch (GIT_PLATFORM) {
    case 'github':
        return `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/tree/${BUILD_BRANCH}`;
    case 'gitlab':
        return `https://gitlab.com/${PROJECT_OWNER}/${PROJECT_NAME}/tree/${BUILD_BRANCH}`;
    case 'bitbucket':
        return `https://bitbucket.org/${PROJECT_OWNER}/${PROJECT_NAME}/branch/${BUILD_BRANCH}`;
    }

    return '';
};

module.exports = BRANCH_URL;
