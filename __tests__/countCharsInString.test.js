/*
Sauce:
https://tinyurl.com/vd6ntvp
*/

const stringCounter = require('../src/countCharsInString');

describe('Count characters in your string', ()=> {
    describe('Given a valid string,', ()=>{
        it('produce an ordered array of chars.', ()=>{
            const input = 'hello';
            const output = stringCounter.produceOrderedArray(input);
            const expectedResult = ['e', 'h', 'l', 'l', 'o'];
            expect(output).toEqual(expectedResult);
        });
        it('produce counts for each char.', ()=> {
            const input = 'hello';
            const output = stringCounter.produceCharCounts(input);
            const expectedResult = {'e':1, 'h':1, 'l':2, 'o':1};
            expect(output).toBe(expectedResult);
        });
    });
});
