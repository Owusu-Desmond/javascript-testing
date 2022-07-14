const stringLength = require('./index')

test('Length of "string" is 6', () => {
    expect(stringLength('string')).toBe(6);
})