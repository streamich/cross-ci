/// Path to repository folder.
const BUILD_DIR = () =>
    process.env.CIRCLE_WORKING_DIRECTORY
    || process.env.TRAVIS_BUILD_DIR
    || process.env.CI_PROJECT_DIR // Gitlab
    || process.cwd();

module.exports = BUILD_DIR;
