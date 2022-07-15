const Calculator = require('./calculator')
const calculator = new Calculator(4, 12)

describe('Perforn (+), (/), (*) and (-) operations on "4" and "12"', () => {
    test('Add 4 and 12 to give 16', () => {
        expect(calculator.add()).toBe(16);
    })
    test('Subtract 4 and 12 to give 8', () => {
        expect(calculator.subtract()).toBe(8);
    })
    test('divide 12 by 4 to give 1/3', () => {
        expect(calculator.divide()).toBe(1 / 3);
    })
    test('mutiply 4 by 12 to give 48', () => {
        expect(calculator.mutiply()).toBe(48);
    })
})