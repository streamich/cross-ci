/// Names of branches which should trigger a release when they are built.
/// Defaults to `['master', 'develop', 'next-release', 'release']`.
const RELEASE_BRANCHES = ['master', 'develop', 'next-release', 'release'];

module.exports = RELEASE_BRANCHES;
