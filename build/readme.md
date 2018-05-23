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

```mmd
return scripts.variableList();
```


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

```mmd
return scripts.variables();
```
