const path = require('path');
const fs = require('fs');
const glob = require('glob');

const REG_BLOCK = /(^|\n)(\s*\/\/\/([^\n]*))+/g;
const REG_LINE = /\s*\/\/\/\s?([^\n]*)/;

const docifyFolder = ({folder, concatBlock, concatListItem}) => {
    let files;

    try {
        files = glob.sync(folder + '/*.js');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        // eslint-disable-next-line no-process-exit
        process.exit(1);

        return;
    }

    const cwd = process.cwd();
    let list = '';
    let text = '';

    for (const file of files) {
        const filename = path.join(cwd, file);
        const content = fs.readFileSync(filename, 'utf8');
        const blocks = content.match(REG_BLOCK);
        const name = path.basename(file).slice(0, -3);
        let fileText = '';

        if (!blocks) {
            // eslint-disable-next-line no-continue
            continue;
        }

        list += concatListItem(name);

        for (const block of blocks) {
            const lines = block.split('\n');

            for (let index = 0; index < lines.length; index++) {
                const line = lines[index];
                const lineMatches = line.match(REG_LINE);

                if (lineMatches) {
                    lines[index] = lineMatches[1];
                }
            }

            const blockText = lines.join('\n').replace(/\n{3,}/g, '\n');

            fileText += blockText + '\n';
        }

        text += concatBlock(name, fileText);
    }

    // eslint-disable-next-line consistent-return
    return list + '\n\n' + text;
};

module.exports = docifyFolder;
