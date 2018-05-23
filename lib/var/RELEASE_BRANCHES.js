/// Names of branches which should trigger a release,
/// defaults to `['master', 'production']`.
const RELEASE_BRANCHES = () => ['master', 'production'];

module.exports = RELEASE_BRANCHES;
