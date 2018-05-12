const BRANCH_URL = ({PROJECT_OWNER, PROJECT_NAME, BUILD_BRANCH}) =>
    `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/tree/${BUILD_BRANCH}`;

module.exports = BRANCH_URL;
