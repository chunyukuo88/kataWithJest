const englishWordToPigLatin = require('../src/piglatin');

describe('Valid cases', ()=> {

    describe("Word begins with a vowel.", ()=> {
    
        it("appends ay to the end of a word", () => {
            const input  = 'alligator';
            const expectedOutput = 'alligatoray';
            const result = englishWordToPigLatin(input);
            expect(expectedOutput).toBe(result);
        })
    })
    
    describe("Word begins with a consonant", ()=> {
    
        describe("Word begins with a single consonant", ()=>{
            
            it('takes the first letter of the word and appends it to the end, followed by ay', ()=>{
                const input = 'horse';
                const expectedOutput = 'orsehay';
                const result = englishWordToPigLatin(input);
                expect(expectedOutput).toBe(result);
            })

        })

        describe("Word begins with multiple consonants", ()=>{

            it('takes the first two or more consonants and appends them to the end, followed by ay', ()=>{
                const input = 'schedule';
                const expectedOutput = 'eduleschay';
                const result = englishWordToPigLatin(input);
                expect(expectedOutput).toBe(result);
            })

        })
    
    })
})



describe('Invalid cases', ()=> {

    describe("The word is null", ()=> {
    
        it('returns an empty string', ()=> {
            const input = null;
            const expectedOutput = '';
            const result = englishWordToPigLatin(input);
            expect(expectedOutput).toBe(result);
        })
    })

    describe("The word is an empty string", ()=> {

        it('returns an empty string', ()=>{
            const input = '';
            const expectedOutput = '';
            const result = englishWordToPigLatin(input);
            expect(expectedOutput).toBe(result);
        })

    })

    describe("The word is an empty string of whitespace", ()=> {
        it('returns an empty string', ()=>{
            const input = '       ';
            const expectedOutput = '';
            const result = englishWordToPigLatin(input);
            expect(expectedOutput).toBe(result);
        })
    })
})

//