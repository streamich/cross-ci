const pkg = require('../pkg');

/// GitHub project name.
const getProjectName = () => {
    if (pkg.name && (typeof pkg.name === 'string')) {
        return pkg.name;
    }

    try {
        const {url} = pkg.repository;

        if (typeof url === 'string') {
            const matches = url.match(/github.com\/([^/]+)\/([^/]+)/i);

            return matches && matches[2]
                ? matches[2].split('.')[0]
                : '';
        }
    // eslint-disable-next-line no-empty
    } catch (error) {}

    return '';
};

const PROJECT_NAME = () =>
    process.env.CIRCLE_PROJECT_REPONAME
    || (process.env.TRAVIS_REPO_SLUG ? process.env.TRAVIS_REPO_SLUG.split('/')[1] : '')
    || process.env.TEAMCITY_PROJECT_NAME
    || process.env.CI_PROJECT_NAME // Gitlab
    || getProjectName()
    || '___UNKNOWN_PROJECT_NAME___';

module.exports = PROJECT_NAME;
