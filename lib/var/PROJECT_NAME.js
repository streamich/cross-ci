const pkg = require('../pkg');

/// GitHub project name. Below is a list of environment variables per CI used to
/// detect project name:
///
/// - CircleCI: [`CIRCLE_PROJECT_REPONAME`](https://circleci.com/docs/1.0/environment-variables/#build-details)
/// - TravisCI: [`TRAVIS_REPO_SLUG`](https://docs.travis-ci.com/user/environment-variables/)
///
/// If environment variables are empty, it will also try to extract
/// project name from `package.json`. First it will try `name` field.
/// If project name is not specified in `name` field, it will
/// try `repository.url` field.
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

const PROJECT_NAME =
    process.env.CIRCLE_PROJECT_REPONAME
    || (process.env.TRAVIS_REPO_SLUG ? process.env.TRAVIS_REPO_SLUG.split('/')[1] : '')
    || getProjectName()
    || '___UNKNOWN_PROJECT_NAME___';

module.exports = PROJECT_NAME;
