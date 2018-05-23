/// Link to project on GitHub.
const PROJECT_URL = ({GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME}) =>
    process.env.PROJECT_URL
    || (GIT_PLATFORM === 'github'
        ? `https://github.com/${PROJECT_OWNER}/${PROJECT_NAME}`
        : '')
    || (GIT_PLATFORM === 'gitlab'
        ? `https://gitlab.com/${PROJECT_OWNER}/${PROJECT_NAME}`
        : '')
    || (GIT_PLATFORM === 'bitbucket'
        ? `https://bitbucket.org/${PROJECT_OWNER}/${PROJECT_NAME}`
        : '')
    || process.env.CI_PROJECT_URL // Gitlab
    || '';

module.exports = PROJECT_URL;
