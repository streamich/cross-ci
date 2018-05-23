/// URL to CI build page.
const BUILD_URL = ({CI_PLATFORM, PROJECT_OWNER, PROJECT_NAME}) =>
    process.env.CIRCLE_BUILD_URL
    || (CI_PLATFORM === 'travis'
        ? `https://travis-ci.org/${PROJECT_OWNER}/${PROJECT_NAME}/builds/${process.env.TRAVIS_BUILD_ID}`
        : '')
    || (CI_PLATFORM === 'gitlab'
        ? `https://gitlab.com/${PROJECT_OWNER}/${PROJECT_NAME}/-/jobs/${process.env.CI_JOB_ID}`
        : '')
    || '';

module.exports = BUILD_URL;
