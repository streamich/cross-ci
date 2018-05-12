/// Is `true` if currently built branch is one of `RELEASE_BRANCHES`.
const IS_RELEASE = ({RELEASE_BRANCHES, BUILD_BRANCH}) =>
    RELEASE_BRANCHES.indexOf(BUILD_BRANCH) > -1;

module.exports = IS_RELEASE;
