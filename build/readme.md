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

```mmd
return scripts.variableList();
```

```mmd
return scripts.variables();
```
