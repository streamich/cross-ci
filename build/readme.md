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
npx cross-ci :echo \
    "AWS_ACCESS_KEY_ID=\${process.env.AWS_ACCESS_KEY_STAGING}" \
    "AWS_SECRET_ACCESS_KEY=\${process.env.AWS_SECRET_STAGING}" \
        s3 sync ./public "s3://bucket/builds/\${PROJECT_NAME}/\${BUILD_VERSION}/public" \
            --region eu-west-1 \
            --acl public-read
```


## Variable Reference

```mmd
return scripts.variables();
```
