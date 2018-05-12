# cross-ci

Normalizes environment variables across different CI environments.

##### Install

```
npm install -global cross-ci

or

npm install --save-dev cross-ci
```

##### CLI usage

```
cross-ci ./your-script.sh
```

##### Node usage

```js
const vars = require('cross-ci').vars;
```

## Variables

`ci-scripts` pre-generates and normalizes across CI runners commonly used environment variables.
The convetion is to use all upper case letters for "global" variables.

- [`BUILD_BRANCH`](#build_branch-variable)
- [`BUILD_COMMIT_PR_URL`](#build_commit_pr_url-variable)
- [`BUILD_COMMIT_URL`](#build_commit_url-variable)
- [`BUILD_COMMIT`](#build_commit-variable)
- [`BUILD_NUM`](#build_num-variable)
- [`BUILD_PR_NUM`](#build_pr_num-variable)
- [`BUILD_PR_URL`](#build_pr_url-variable)
- [`BUILD_URL`](#build_url-variable)
- [`BUILD_VERSION`](#build_version-variable)
- [`CI_NAME`](#ci_name-variable)
- [`CI_PLATFORM`](#ci_platform-variable)
- [`GITHUB_TOKEN`](#github_token-variable)
- [`IS_PR`](#is_pr-variable)
- [`IS_RELEASE`](#is_release-variable)
- [`MONTH`](#month-variable)
- [`PROJECT_NAME`](#project_name-variable)
- [`PROJECT_OWNER`](#project_owner-variable)
- [`PROJECT_URL`](#project_url-variable)
- [`PROJECT_VERSION`](#project_version-variable)
- [`RELEASE_BRANCHES`](#release_branches-variable)
- [`UPLOAD_PATH`](#upload_path-variable)
- [`YEAR`](#year-variable)






#### `BUILD_BRANCH` Variable



Name of the Git branch which is currently being built.
In CircleCI the `CIRCLE_BRANCH` environment variable is used.
In TravisCI it is set to `TRAVIS_PULL_REQUEST_BRANCH` if the build originated
as a pull request, or `TRAVIS_BRANCH` otherwise.
If `BUILD_BRANCH` environment variable is present, uses that.

```shell
ci echo --message "branch: \${BUILD_BRANCH}"
```



#### `BUILD_COMMIT_PR_URL` Variable

URL of PR build commit.



#### `BUILD_COMMIT_URL` Variable

URL of build commit.



#### `BUILD_COMMIT` Variable



SHA1 of the Git commit being built.



#### `BUILD_NUM` Variable

Build number, a numeric value uniquely identifying current build.
In CircleCI equals to `CIRCLE_BUILD_NUM` environment variable.
In TravisCI equals to `TRAVIS_BUILD_NUMBER` environment variable.
Otherwise tries `BUILD_NUM` environment variable.
If not build number detected, defaults to `0`.



#### `BUILD_PR_NUM` Variable

Number of the pull request on GitHub.
In CircleCI pull request number is extracted from `CI_PULL_REQUEST` environment variable.
Which is a link to the pull request of the current job.
In TravicCI `TRAVIS_PULL_REQUEST` environment varialbe is used.


Will also try `BUILD_PR_NUM` environment variable.
Otherwise defaults to `0`.



#### `BUILD_PR_URL` Variable

URL to GitHub PR page.



#### `BUILD_URL` Variable

URL to CI build page.



#### `BUILD_VERSION` Variable

A human-readable string uniquely identifying current build.
For pull requests will equal to something like `x.y.z-pr-1.1`.
For build jobs that are not part of a pull request,
it will contain a branch name, like `x.y.z-master.1`.



#### `CI_NAME` Variable

A user-friendly CI display name.

- `CircleCI` for CircleCI
- `Travis` for TravisCI



#### `CI_PLATFORM` Variable

A string identifying the CI platform.

- `circle` for CircleCI
- `travis` for TravisCI



#### `GITHUB_TOKEN` Variable

Equals to `GITHUB_TOKEN` or `GITHUB_ACCESS_TOKEN` environment variables, in that order.



#### `IS_PR` Variable

Boolean, `true` if the current build is triggered by a pull request.



#### `IS_RELEASE` Variable

Is `true` if currently built branch is one of `RELEASE_BRANCHES`.



#### `MONTH` Variable

Current month numeric value as a string of length two.



#### `PROJECT_NAME` Variable



GitHub project name. Below is a list of environment variables per CI used to
detect project name:

- CircleCI: [`CIRCLE_PROJECT_REPONAME`](https://circleci.com/docs/1.0/environment-variables/#build-details)
- TravisCI: [`TRAVIS_REPO_SLUG`](https://docs.travis-ci.com/user/environment-variables/)

If environment variables are empty, it will also try to extract
project name from `package.json`. First it will try `name` field.
If project name is not specified in `name` field, it will
try `repository.url` field.



#### `PROJECT_OWNER` Variable



User name or organization name that owns the repository. In CircleCI uses
`CIRCLE_PROJECT_USERNAME` env var, in TravisCI it extracts repository
owner from `user/repo` slug `TRAVIS_REPO_SLUG`. It will also try to extract
repository owner from `package.json`, using `repository.url` field.



#### `PROJECT_URL` Variable

Link to project on GitHub.



#### `PROJECT_VERSION` Variable

Semver version of your project. Taken from `package.json`.



#### `RELEASE_BRANCHES` Variable

Names of branches which should trigger a release when they are built.
Defaults to `['master', 'develop', 'next-release', 'release']`.



#### `UPLOAD_PATH` Variable

Relative upload path where artifacts will be stored.
For a pull request it defaults to:

```js
`/builds/${PROJECT_NAME}/prs/${YEAR}-${MONTH}/${BUILD_VERSION}`
```

Which results into something like:

```
/builds/repo/prs/2018-04/1.2.3-pr-1.1`
```
For not pull request it defaults to:

```js
`/builds/${PROJECT_NAME}/${BUILD_BRANCH}`
```

Which results into something like:

```
/builds/repo/master`
```



#### `YEAR` Variable

Current year as a four character long string.





