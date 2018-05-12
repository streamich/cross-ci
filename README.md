# ci-scripts

Useful scripts to execute from your CI runner. For example, post to Slack:

```
ci slack --message="Build finished!"
```

Upload build artifacts to S3:

```
ci s3-upload
```

Bump NPM version automatically using semantic semver and push changed `package.json` to origin:

```
ci npm-bump --type=auto
```

See sample [Travis](./.travis.yml) and [CircleCI](./.circleci/config.yml) configurations.


## Usage

You can use `ci-scripts` as a CLI tool as well as programmatically.


### From Command Line

Install globally or in your project repo to get started.

```
npm install -g ci-scripts
```

Test that it works.

```
ci echo --message="It works"
```

### From Node.js

```js
const {exec} = require('ci-scripts');

exec(['echo'], {message: 'It works'});
```

## Docs


##### CLI Params

- `--plan` &mdash; don't execute the actual command, but show what it would do.
- `--verbose` &mdash; log extra info.
- `-e`, `--eval` &mdash; evaluate command line params as templat strings.
- `-v`, `--version` &mdash; prints version.
- `-h`, `--help` &mdash; prints README in terminal.


##### Scripts

- [`echo`](#ci-echo-script)
- [`github-post`](#ci-github-post-script)
- [`github-upload`](#ci-github-upload-script)
- [`help`](#ci-help-script)
- [`s3-upload`](#ci-s3-upload-script)
- [`slack`](#ci-slack-script)
- [`version`](#ci-version-script)




##### Variables

- [`BUILD_BRANCH`](#build_branch-variable)
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




## Scripts




### `ci echo` Script



`echo` script simply prints a message to standard output. Set
message in `--message` param.

```shell
ci echo --message "Hello world!"
```


Using `--eval` parameters get wrapped in template string literals and evaluated.
You can use that to pring useful data.

```shell
ci echo --message "Version: \${PROJECT_VERSION}" --eval
ci echo --message "\${JSON.stringify(ci, null, 4)}" --eval
```




### `ci github-post` Script



Posts a message to your GitHub PR thread.


To be able to post to GitHub you need to have a GitHub access token,
you can get one [here](https://github.com/settings/tokens).

Once you have obtained your token, you can specify it as a
`GITHUB_TOKEN` environment varialbe.

```
GITHUB_TOKEN=<your_github_token> ci github-post --plan
```

As `--token` param:
```
ci github-post --token=<your_github_token> --plan
```

Or in `ci.config.js`:

```js
{
    'github-post': {
        params: {
            token: '<your_github_token>'
        }
    }
};
```


Use `--text` param to specify a custom message. Default message:

> Build version: __`x.y.z-pr-1.1`__




### `ci github-upload` Script



Uploads a specified folder to GitHub `gh-pages` branch, which
can be used for static site or documentation hosting. By default
it uploads the contents of `./docs` folder, but you can overwrite
the folder using `--folder` param.




### `ci help` Script



Prints README in terminal.




### `ci s3-upload` Script



Uploads a folder and all its files recursively to a destination
in a S3 bucket.


- `accessKeyId` &mdash; optional, AWS access key id.
- `secretAccessKey` &mdash; optional, AWS secrekt key.
- `src` &mdash; optional, source folder to upload, defaults to `dist/`.
- `bucket` &mdash; required, S3 bucket name.
- `dest` &mdash; optional, S3 destination path, defaults to '""'.
- `acl` &mdash; optional, access rights to all uploaded objects.
- `delete` &mdash; optional, whether to delete old files on S3, defaults to `false`.




### `ci slack` Script


Posts a message to your Slack channel.


You can specify a custom message using `--text` param, either through `ci.config.js`
config file or as a command line argument. It can be a static string or a
JavaScript expression.

```
ci slack --text="Hello Slack"
ci slack --text="Year: \${YEAR}"
```

Set message text using `ci.config.js` config file:

```js
{
    slack: {
        params: {
            text: ({PROJECT_NAME}) =>
                `Success, built ${'`' + PROJECT_NAME + '`'}!`
        }
    }
}
```


Use `--username` param to overwrite sender's display name, defaults to `ci-scripts`.


Set emoji icon of the sender using `--icon_emoji` param, defaults to `javascript`.

```
ci slack --icon_emoji=ghost
```

Specify sender icon URL using `--icon_url` param.

You can overwrite default channel using `--channel` param.


To post to Slack you need a Webhook, you can create one
following [this link](https://mailonline.slack.com/apps/A0F7XDUAZ-incoming-webhooks).
Once you have a Webhook you can specify it to `ci-scipts` in a number of ways.
The simplest way is to an environment variable.

```
SLACK_WEBHOOK=<webhook> ci slack
```

You can also set it as a command parameter.

```
ci slack --webhook="<webhook>"
```

Or provide it in `ci.config.js` configuration file.

```js
{
    slack: {
        params: {
            webhook: "<webhook>"
        }
    }
}
```




### `ci version` Script



Prints out the version of `ci-scripts`. Use it in
one the three ways below.

```
ci version
ci -v
ci --version
```





## Variables

`ci-scripts` pre-generates and normalizes across CI runners commonly used environment variables.
The convetion is to use all upper case letters for "global" variables.




#### `BUILD_BRANCH` Variable



Name of the Git branch which is currently being built.
In CircleCI the `CIRCLE_BRANCH` environment variable is used.
In TravisCI it is set to `TRAVIS_PULL_REQUEST_BRANCH` if the build originated
as a pull request, or `TRAVIS_BRANCH` otherwise.
If `BUILD_BRANCH` environment variable is present, uses that.

```shell
BUILD_BRANCH=test ci echo --message "branch: \${BUILD_BRANCH}"
```



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



User name or organization name that owns the repository.
In TravisCI it extracts repository owner from `user/repo` slug `TRAVIS_REPO_SLUG`.


It will also try to extract repository owner from `package.json`,
using `repository.url` field.



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





