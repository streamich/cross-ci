const vars = require('../index');

test('PROJECT_NAME is correct', () => {
    expect(vars.PROJECT_NAME).toBe('cross-ci');
});
