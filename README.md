# cross-ci

`cross-ci` standardizes environment variables for CI. For example,
your can simply use `BUILD_BRANCH` variable in all CI runners instead of `CIRCLE_BRANCH` in
CircleCI or `TRAVIS_PULL_REQUEST_BRANCH` in Travis.

##### Install

```
npm i cross-ci
```

##### Node usage

```js
const vars = require('cross-ci').vars;
```

##### CLI usage

```
npx cross-ci printenv BUILD_COMMIT_URL
```

## Variables

- [`BUILD_BRANCH`](#build_branch)
- [`BUILD_COMMIT_PR_URL`](#build_commit_pr_url)
- [`BUILD_COMMIT_URL`](#build_commit_url)
- [`BUILD_COMMIT`](#build_commit)
- [`BUILD_DIR`](#build_dir)
- [`BUILD_NUM`](#build_num)
- [`BUILD_PR_NUM`](#build_pr_num)
- [`BUILD_PR_URL`](#build_pr_url)
- [`BUILD_URL`](#build_url)
- [`BUILD_VERSION`](#build_version)
- [`CI_NAME`](#ci_name)
- [`CI_PLATFORM`](#ci_platform)
- [`GITHUB_TOKEN`](#github_token)
- [`IS_CI`](#is_ci)
- [`IS_PR`](#is_pr)
- [`IS_RELEASE`](#is_release)
- [`MONTH`](#month)
- [`PROJECT_NAME`](#project_name)
- [`PROJECT_OWNER`](#project_owner)
- [`PROJECT_URL`](#project_url)
- [`PROJECT_VERSION`](#project_version)
- [`RELEASE_BRANCHES`](#release_branches)
- [`UPLOAD_PATH`](#upload_path)
- [`YEAR`](#year)






#### `BUILD_BRANCH`



Name of the Git branch which is currently being built.
In CircleCI the `CIRCLE_BRANCH` environment variable is used.
In TravisCI it is set to `TRAVIS_PULL_REQUEST_BRANCH` if the build originated
as a pull request, or `TRAVIS_BRANCH` otherwise.
If `BUILD_BRANCH` environment variable is present, uses that.



#### `BUILD_COMMIT_PR_URL`

URL of PR build commit.



#### `BUILD_COMMIT_URL`

URL of build commit.



#### `BUILD_COMMIT`



SHA1 of the Git commit being built.



#### `BUILD_DIR`

Path to repository folder.



#### `BUILD_NUM`

Build number, a numeric value uniquely identifying current build.
In CircleCI equals to `CIRCLE_BUILD_NUM` environment variable.
In TravisCI equals to `TRAVIS_BUILD_NUMBER` environment variable.
In TeamCity equals to `BUILD_NUMBER` environment variable.
Otherwise tries `BUILD_NUM` environment variable.
If not build number detected, defaults to `0`.



#### `BUILD_PR_NUM`

Number of the pull request on GitHub.
In CircleCI pull request number is extracted from `CI_PULL_REQUEST` environment variable.
Which is a link to the pull request of the current job.
In TravicCI `TRAVIS_PULL_REQUEST` environment varialbe is used.


Will also try `BUILD_PR_NUM` environment variable.
Otherwise defaults to `0`.



#### `BUILD_PR_URL`

URL to GitHub PR page.



#### `BUILD_URL`

URL to CI build page.



#### `BUILD_VERSION`

A human-readable string uniquely identifying current build.
For pull requests will equal to something like `x.y.z-pr-1.1`.
For build jobs that are not part of a pull request,
it will contain a branch name, like `x.y.z-master.1`.



#### `CI_NAME`

A user-friendly CI display name.

- `CircleCI` for CircleCI
- `Travis` for TravisCI
- `TeamCity` for TeamCity



#### `CI_PLATFORM`

A string identifying the CI platform.

- `circle` for CircleCI
- `travis` for TravisCI
- `teamcity` for TeamCity



#### `GITHUB_TOKEN`

Equals to `GITHUB_TOKEN` or `GITHUB_ACCESS_TOKEN` environment variables, in that order.



#### `IS_CI`

Boolean indicating if script runs in a CI environment.



#### `IS_PR`

Boolean, `true` if the current build is triggered by a pull request.



#### `IS_RELEASE`

Is `true` if currently built branch is one of `RELEASE_BRANCHES`.



#### `MONTH`

Current month numeric value as a string of length two.



#### `PROJECT_NAME`



GitHub project name. Below is a list of environment variables per CI used to
detect project name:

- CircleCI: [`CIRCLE_PROJECT_REPONAME`](https://circleci.com/docs/1.0/environment-variables/#build-details)
- TravisCI: [`TRAVIS_REPO_SLUG`](https://docs.travis-ci.com/user/environment-variables/)
- TeamCity: [`TEAMCITY_PROJECT_NAME`](https://confluence.jetbrains.com/display/TCD9/Predefined+Build+Parameters)

If environment variables are empty, it will also try to extract
project name from `package.json`. First it will try `name` field.
If project name is not specified in `name` field, it will
try `repository.url` field.



#### `PROJECT_OWNER`



User name or organization name that owns the repository. In CircleCI uses
`CIRCLE_PROJECT_USERNAME` env var, in TravisCI it extracts repository
owner from `user/repo` slug `TRAVIS_REPO_SLUG`. It will also try to extract
repository owner from `package.json`, using `repository.url` field.



#### `PROJECT_URL`

Link to project on GitHub.



#### `PROJECT_VERSION`

Semver version of your project. Taken from `package.json`.



#### `RELEASE_BRANCHES`

Names of branches which should trigger a release when they are built.
Defaults to `['master', 'develop', 'next-release', 'release']`.



#### `UPLOAD_PATH`

Relative upload path for artifacts. Defaults to:

```
builds/${PROJECT_NAME}/${BUILD_VERSION}
```



#### `YEAR`

Current year as a four character long string.





