const vars = require('../index').vars;

test('PROJECT_NAME is correct', () => {
    expect(vars.PROJECT_NAME).toBe('cross-ci');
});
