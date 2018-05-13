const {execSync} = require('child_process');
const vars = require('./createVars')();

const argv = process.argv.slice(2);
const cmd = argv.join(' ');

execSync(cmd, {
    stdio: [0, 1, 2],
    env: {
        ...process.env,
        ...vars,
    },
});
