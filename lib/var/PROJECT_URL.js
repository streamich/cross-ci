/// Link to project on GitHub.
const PROJECT_URL = ({PROJECT_OWNER, PROJECT_NAME}) =>
    process.env.CI_PROJECT_URL
    || `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}`;

module.exports = PROJECT_URL;
