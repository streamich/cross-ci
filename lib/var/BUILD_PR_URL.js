/// URL to GitHub PR page.
const BUILD_PR_URL = ({GIT_PLATFORM, BUILD_PR_NUM, PROJECT_OWNER, PROJECT_NAME}) => {
    switch (GIT_PLATFORM) {
    case 'github':
        return `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/pull/${BUILD_PR_NUM}`;
    case 'gitlab':
        return `https://gitlab.com/${PROJECT_OWNER}/${PROJECT_NAME}/merge_requests/${BUILD_PR_NUM}`;
    }

    return process.env.CIRCLE_BUILD_URL || '';
};

module.exports = BUILD_PR_URL;
