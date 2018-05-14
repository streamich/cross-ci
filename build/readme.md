# cross-ci

`cross-ci` standardizes environment variables for CI. For example,
your can simply use `BUILD_BRANCH` variable in all CI runners instead of `CIRCLE_BRANCH` in
CircleCI or `TRAVIS_PULL_REQUEST_BRANCH` in Travis.

##### Install

```
npm i -g cross-ci
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

```mmd
return scripts.variableList();
```

```mmd
return scripts.variables();
```
