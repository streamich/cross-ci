/// URL of PR build commit.
const BUILD_COMMIT_PR_URL = ({GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME, BUILD_PR_NUM, BUILD_COMMIT}) => {
    switch (GIT_PLATFORM) {
    case 'github':
        return `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/pull/${BUILD_PR_NUM}/commits/${BUILD_COMMIT}`;
    case 'gitlab':
        return `https://gitlab.com/${PROJECT_OWNER}/${PROJECT_NAME}/merge_requests/${BUILD_PR_NUM}/diffs?commit_id=${BUILD_COMMIT}`;
    }

    return '';
};

module.exports = BUILD_COMMIT_PR_URL;
