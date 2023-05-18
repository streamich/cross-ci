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
- [`BUILD_COMMIT7`](#build_commit7)
- [`BUILD_DIR`](#build_dir)
- [`BUILD_NUM`](#build_num)
- [`BUILD_PR_NUM`](#build_pr_num)
- [`BUILD_PR_URL`](#build_pr_url)
- [`BUILD_URL`](#build_url)
- [`BUILD_VERSION`](#build_version)
- [`CI_NAME`](#ci_name)
- [`CI_PLATFORM`](#ci_platform)
- [`GIT_PLATFORM`](#git_platform)
- [`GIT_REMOTE`](#git_remote)
- [`GITHUB_TOKEN`](#github_token)
- [`IS_CI`](#is_ci)
- [`IS_PR`](#is_pr)
- [`IS_RELEASE`](#is_release)
- [`JOB_NUM`](#job_num)
- [`JOB_URL`](#job_url)
- [`MONTH`](#month)
- [`PROJECT_NAME`](#project_name)
- [`PROJECT_OWNER`](#project_owner)
- [`PROJECT_URL`](#project_url)
- [`PROJECT_VERSION`](#project_version)
- [`RELEASE_BRANCHES`](#release_branches)
- [`TIME`](#time)
- [`TIMESTAMP`](#timestamp)
- [`UPLOAD_PATH`](#upload_path)
- [`YEAR`](#year)




## Pseudo Commands

##### `:echo`

```shell
npx cross-ci :echo node --eval "\"console.log('\${PROJECT_NAME}')\""
```

##### `:run`

```shell
npx cross-ci :run node --eval "\"console.log('\${PROJECT_NAME}')\""
```

## Examples

##### Provide Evn Vars to Webpack, from `package.json`

```json
{
    "scripts": {
        "build": "cross-ci webpack -p"
    }
}
```

##### Update GitHub status

```shell
npx cross-ci :run \
    npx commit-status success Storybook "'\${BUILD_VERSION}'" "'https://example.com'"
```

##### Upload to S3

```shell
npx cross-ci :run \
    s3 sync ./public "s3://bucket/builds/\${PROJECT_NAME}/\${BUILD_VERSION}/public" \
        --region eu-west-1 \
        --acl public-read
```

##### Post to Slack

```shell
npx cross-ci :run \
    curl -X POST -H 'Content-type: application/json' \
        --data "'{\
            \"text\":\"Built \\\`<\${PROJECT_URL}|\${PROJECT_NAME}>\\\` :crossed_fingers: \\\`<\${BRANCH_URL}|\${BUILD_BRANCH}>\\\` :crossed_fingers: \\\`\${BUILD_VERSION}\\\` on <\${BUILD_URL}|\${CI_NAME}> :tada:\", \
            \"username\": \"cross-ci\", \
            \"icon_emoji\": \":clap:\"}'" \
        https://hooks.slack.com/services/XXXX/XXXX/XXXXXXXX
```

##### Post to GitHub

```shell
GITHUB_TOKEN=XXXXXXXX \
    npx cross-ci :run \
        curl -X POST -H "Content-Type: application/json" \
            --data "'{\"body\": \"Build version: \\\`\${BUILD_VERSION}\\\` :crossed_fingers: [\\\`\${BUILD_BRANCH}\\\`](\${BRANCH_URL}) on [\${CI_NAME}](\${BUILD_URL}) :tada:\"}'" \
        "https://api.github.com/repos/\${PROJECT_OWNER}/\${PROJECT_NAME}/issues/\${BUILD_PR_NUM}/comments?access_token=\${GITHUB_TOKEN}"
```

## Variable Reference



#### `BUILD_BRANCH`



Git branch being built or targeted by a pull request.



#### `BUILD_COMMIT_PR_URL`

URL of PR build commit.



#### `BUILD_COMMIT_URL`

URL of build commit.



#### `BUILD_COMMIT`



SHA1 of the Git commit being built.



#### `BUILD_COMMIT7`



First 7 chars of SHA1 of the Git commit being built.



#### `BUILD_DIR`



Path to repository folder.



#### `BUILD_NUM`



CI service build number.



#### `BUILD_PR_NUM`



Pull request (aka Merge request) number. Defaults to `0`.



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



CI service Commercial name (e.g. `Travis`, `CircleCI`, `TeamCity`).



#### `CI_PLATFORM`



Standardized CI service name (e.g. `travis`, `circle`, `gitlab`).



#### `GIT_PLATFORM`



Git version control system used



#### `GIT_REMOTE`

Git remote used.



#### `GITHUB_TOKEN`

Equals to `GITHUB_TOKEN`, `GITHUB_ACCESS_TOKEN`, `GH_TOKEN`, or `GIT_CREDENTIALS` environment variables, in that order.



#### `IS_CI`



Boolean indicating if script runs in a CI environment.



#### `IS_PR`



Boolean, `true` if the current build is triggered by a pull request.



#### `IS_RELEASE`

Is `true` if currently built branch is one of `RELEASE_BRANCHES`.



#### `JOB_NUM`

CI service job number



#### `JOB_URL`

Link to the CI service job



#### `MONTH`

Current month numeric value as a string of length two.



#### `PROJECT_NAME`



GitHub project name.



#### `PROJECT_OWNER`



User name or organization name that owns the repository.



#### `PROJECT_URL`

Link to project on GitHub.



#### `PROJECT_VERSION`

Semver version of your project. Taken from `package.json`. Othewise
defaults to `0.0.0`.



#### `RELEASE_BRANCHES`

Names of branches which should trigger a release,
defaults to `['master', 'production']`.



#### `TIME`

Current time in UTC format.



#### `TIMESTAMP`

UNIX timestamp.



#### `UPLOAD_PATH`

Relative upload path for artifacts. Defaults to:

```
builds/${PROJECT_NAME}/${BUILD_VERSION}
```



#### `YEAR`

Current year as a four character long string.





