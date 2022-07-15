const reverseString = require('./reverseString');

test("reverse 'string' to be 'gnirts'", () => {
    expect(reverseString('string')).toBe('gnirts');
})