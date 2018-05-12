const createVars = require('../../lib/createVars');

describe('YEAR', () => {
    test('returns correct year', async () => {
        const vars = await createVars({});

        expect(vars.YEAR).toBe(String((new Date()).getFullYear()));
    });
});
