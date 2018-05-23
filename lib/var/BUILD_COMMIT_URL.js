/// URL of build commit.
const BUILD_COMMIT_URL = ({GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME, BUILD_COMMIT}) => {
    switch (GIT_PLATFORM) {
    case 'github':
        return `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/commit/${BUILD_COMMIT}`;
    case 'gitlab':
        return `https://gitlab.com/${PROJECT_OWNER}/${PROJECT_NAME}/commit/${BUILD_COMMIT}`;
    case 'bitbucket':
        return `https://bitbucket.org/${PROJECT_OWNER}/${PROJECT_NAME}/commits/${BUILD_COMMIT}`;
    }

    return '';
};

module.exports = BUILD_COMMIT_URL;
