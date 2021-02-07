import { topThreeWords } from "./topThreeWords";

describe('topThreeWords()', ()=>{
    describe('WHEN: Given the string "A A A AND AND THE", ', ()=>{
        test('THEN: It returns the three most common words.', ()=>{
            const exampleString = 'A A AND AND AND THE';
            const result = topThreeWords(exampleString);
            const expectedResult = ['and', 'a', 'the'];
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given the first example string', ()=>{
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
});
