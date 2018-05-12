const docifyFolder = require('./docifyFolder');

exports.variableList = () => docifyFolder({
    folder: 'lib/var',
    concatBlock: () => '',
    concatListItem: (name) => '- [`' + name + '`](#' + name.toLowerCase() + '-variable)\n',
});

exports.variables = () => docifyFolder({
    folder: 'lib/var',
    concatBlock: (name, src) => `#### \`${name}\` Variable\n\n` + src + '\n\n\n',
    concatListItem: () => '',
});
