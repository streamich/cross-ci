/// URL of PR build commit.
const BUILD_COMMIT_PR_URL = ({PROJECT_OWNER, PROJECT_NAME, BUILD_PR_NUM, BUILD_COMMIT}) =>
    `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/pull/${BUILD_PR_NUM}/commits/${BUILD_COMMIT}`;

module.exports = BUILD_COMMIT_PR_URL;
