/// URL of build commit.
const BUILD_COMMIT_URL = ({PROJECT_OWNER, PROJECT_NAME, BUILD_COMMIT}) =>
    `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/commit/${BUILD_COMMIT}`;

module.exports = BUILD_COMMIT_URL;
