const vars = require('../index');

test('matches snapshot', () => {
    expect(vars.PROJECT_NAME).toBe('cross-ci');
});
