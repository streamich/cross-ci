const {execSync} = require('child_process');

describe(':run pseudo command', () => {
    test('executes a command', () => {
        // eslint-disable-next-line no-template-curly-in-string
        const result = execSync('./bin/cross-ci.js :run "echo \'\\${PROJECT_NAME}\'"').toString().trim();

        expect(result).toBe('cross-ci');
    });

    test('passes through non-zero exit codes', () => {
        expect(() => {
            execSync('./bin/cross-ci.js :run false');
        }).toThrow();
    });
});
