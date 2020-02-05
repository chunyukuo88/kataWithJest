const digitCounter = require('../src/narcNum');
const exponentApplicator = require('../src/narcNum');

describe('Can tell the number of digits', () => {

    it('Counts the number of digits and returns that number', () => {
        const input = 100;
        const expectedOutput = 3;
        const result = digitCounter(input);
        expect(result).toEqual(expectedOutput);
    })

    it('applies the number of digits as an exponent to each digit', () => {
        const input = 1234;
        const expectedOutput = 354; // = 1^4 + 2^4 + 3^4 + 4^4
        const result = exponentApplicator(input);
        expect(result).toBe(expectedOutput);
    })

})