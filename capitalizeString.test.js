const capitalizeString = require('./capitalizeString')

test('Convert "stRINg" to "String"', () => {
    expect(capitalizeString('stRINg')).toBe('String');
})