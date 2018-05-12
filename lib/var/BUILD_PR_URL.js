/// URL to GitHub PR page.
const BUILD_PR_URL = ({BUILD_PR_NUM, PROJECT_OWNER, PROJECT_NAME}) =>
    `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}/pull/${BUILD_PR_NUM}`
    || process.env.CIRCLE_BUILD_URL;

module.exports = BUILD_PR_URL;
