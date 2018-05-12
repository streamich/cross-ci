/// Relative upload path where artifacts will be stored.
/// For a pull request it defaults to:
///
/// ```js
/// `/builds/${PROJECT_NAME}/prs/${YEAR}-${MONTH}/${BUILD_VERSION}`
/// ```
///
/// Which results into something like:
///
/// ```
/// /builds/repo/prs/2018-04/1.2.3-pr-1.1`
/// ```
/// For not pull request it defaults to:
///
/// ```js
/// `/builds/${PROJECT_NAME}/${BUILD_BRANCH}`
/// ```
///
/// Which results into something like:
///
/// ```
/// /builds/repo/master`
/// ```
const UPLOAD_PATH = ({IS_PR, PROJECT_NAME, YEAR, MONTH, BUILD_BRANCH, BUILD_VERSION}) =>
    IS_PR
        ? `/builds/${PROJECT_NAME}/prs/${YEAR}-${MONTH}/${BUILD_VERSION}`
        : `/builds/${PROJECT_NAME}/${BUILD_BRANCH}`;

module.exports = UPLOAD_PATH;
