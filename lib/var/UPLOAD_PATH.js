/// Relative upload path for artifacts. Defaults to:
///
/// ```
/// builds/${PROJECT_NAME}/${BUILD_VERSION}
/// ```
const UPLOAD_PATH = ({PROJECT_NAME, BUILD_VERSION}) =>
    process.env.UPLOAD_PATH
    || `builds/${PROJECT_NAME}/${BUILD_VERSION}`;

module.exports = UPLOAD_PATH;
