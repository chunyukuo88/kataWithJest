const { containsLettersAndNums, 
        incrementString,
        produceIntegerComponent } = require('../src/stringIncrementor');

describe('Invalid cases', () => {

    it('returns 1 one if the string is empty.', ()=> {
        const input = '';
        const result = incrementString(input);
        const expectedResult = '1';
        expect(result).toBe(expectedResult);
    })
})

describe('Valid cases', () => {

    it('increments by one if the string consists of a number.', ()=>{
        const input = '100';
        const result = incrementString(input);
        expect(result).toBe('101');
    })

    it('appends a 1 to a string with no numbers in it.', ()=>{
        const input = 'Word';
        const result = incrementString(input);
        expect(result).toBe('Word1');
    })

    it('increments a string with both letters & numbers but no leading zeroes', ()=>{
        const input = 'Word299';
        const result = incrementString(input);
        expect(result).toBe('Word300');
    })

})

describe('Can produce separate strings if input contains both letters and numbers', ()=> {

    it('returns a boolean evaluating if the string contains numbers AND letters', ()=> {
        const input = 'Word99';
        const result = containsLettersAndNums(input);
        expect(result).toEqual(true);
    })

    it('can return the number component of the string as an integer', ()=>{
        const input = 'Word99';
        const result = produceIntegerComponent(input);
        expect(result).toEqual(99);
    })

})