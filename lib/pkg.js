const path = require('path');

const dir = process.cwd();
const pkg = path.join(dir, 'package.json');

try {
    // eslint-disable-next-line import/no-dynamic-require
    module.exports = require(pkg);
} catch (error) {
    module.exports = {};
}
