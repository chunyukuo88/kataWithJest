import { topThreeWords } from './topThreeWords';

describe('topThreeWords()', ()=>{
    describe('WHEN: Given a paragraph, ', ()=>{
        test('THEN: It returns the three most common words.', ()=>{
            const exampleString = 'In a village of La Mancha, the name of which I have no desire to call to\n' +
                'mind, there lived not long since one of those gentlemen that keep a lance\n' +
                'in the lance-rack, an old buckler, a lean hack, and a greyhound for\n' +
                'coursing. An olla of rather more beef than mutton, a salad on most\n' +
                'nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra\n' +
                'on Sundays, made away with three-quarters of his income.';
            const result = topThreeWords(exampleString);
            const expectedResult = ['a', 'of', 'on'];
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given the string has two unique words, ', ()=>{
        test('THEN: It returns the two most common words.', ()=>{
            const exampleString = 'dog dog dog cat';
            const result = topThreeWords(exampleString);
            const expectedResult = ['dog', 'cat'];
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given the string has one unique word, ', ()=>{
        test('THEN: It returns that word.', ()=>{
            const exampleString = 'dog dog dog';
            const result = topThreeWords(exampleString);
            const expectedResult = ['dog'];
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given the string an equal number of unique word occurrences, ', ()=>{
        describe('AND: There are more than three unique words where this is the case, ', ()=>{
            test('THEN: It returns the top three based on alphabetical order.', ()=>{
                const exampleString = 'Alice Bob Carl Dan Eddy Frank';
                const result = topThreeWords(exampleString);
                const expectedResult = ['alice', 'bob', 'carl'];
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('WHEN: Given the string contains no words, ', ()=>{
        test('THEN: It returns an empty array.', ()=>{
            const exampleString = '+ - !!!';
            const result = topThreeWords(exampleString);
            const expectedResult = [];
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given the string contains words with punctuation intermixed, ', ()=>{
        test('THEN: It returns an array with the valid words.', ()=>{
            const exampleString = "  //wont won't won't";
            const result = topThreeWords(exampleString);
            const expectedResult = ["won't", "wont"];
            expect(result).toEqual(expectedResult);
        });
    });
});
