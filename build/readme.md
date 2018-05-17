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


## Examples

Upload assets to S3.

```
npx cross-ci :run \
    s3 sync ./public "s3://bucket/builds/\${PROJECT_NAME}/\${BUILD_VERSION}/public" \
        --region eu-west-1 \
        --acl public-read
```

Post message to Slack.

```shell
npx cross-ci :run \
    curl -X POST -H 'Content-type: application/json' \
        --data "'{\
            \"text\":\"Built \\\`<\${PROJECT_URL}|\${PROJECT_NAME}>\\\` :crossed_fingers: \\\`<\${BRANCH_URL}|\${BUILD_BRANCH}>\\\` :crossed_fingers: \\\`\${BUILD_VERSION}\\\` on <\${BUILD_URL}|\${CI_NAME}>\", \
            \"username\": \"cross-ci\", \
            \"icon_emoji\": \":clap:\"}'" \
        https://hooks.slack.com/services/XXXX/XXXX/XXXXXXXX
```

## Variable Reference

```mmd
return scripts.variables();
```
