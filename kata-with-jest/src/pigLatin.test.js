import { pigLatinConverter, invalidInputMessage } from './pigLatin';

describe('pigLatin.js', ()=>{
    describe('pigLatinConverter()', ()=>{
        describe('WHEN: Given a valid string,', ()=>{
            test('AND: The string starts with a consonant,', ()=>{
                const input = 'word';
                const result = pigLatinConverter(input);
                const expectedResult = 'ordway';
                expect(result).toBe(expectedResult);
            });
            test('AND: The string starts with two consecutive consonants,', ()=>{
                const input = 'clues';
                const result = pigLatinConverter(input);
                const expectedResult = 'uesclay';
                expect(result).toBe(expectedResult);
            });
            test('AND: The string starts with three consecutive consonants,', ()=>{
                const input = 'schooner';
                const result = pigLatinConverter(input);
                const expectedResult = 'oonerschay';
                expect(result).toBe(expectedResult);
            });
            test('AND: The string starts with a vowel,', ()=>{

            });
        });
        describe('WHEN: Given an invalid input,', ()=>{
            describe('AND: And the input is not a string,', ()=>{
                test('THEN: It returns the invalid input error message,', ()=>{
                    const input = {};
                    const result = pigLatinConverter(input);
                    const expectedResult = invalidInputMessage;
                    expect(result).toBe(expectedResult);
                });
            });
            describe('WHEN: And the input a string but does not consist entirely of Latin letters,', ()=>{
                test('THEN: It returns the invalid input error message,', ()=>{
                    const input = '===';
                    const result = pigLatinConverter(input);
                    const expectedResult = invalidInputMessage;
                    expect(result).toBe(expectedResult);
                });
            });
            describe('WHEN: And the input is null,', ()=>{
                test('THEN: It returns the invalid input error message,', ()=>{
                    const input = null;
                    const result = pigLatinConverter(input);
                    const expectedResult = invalidInputMessage;
                    expect(result).toBe(expectedResult);
                });
            });
            describe('WHEN: And the input is undefined,', ()=>{
                test('THEN: It returns the invalid input error message,', ()=>{
                    const input = undefined;
                    const result = pigLatinConverter(input);
                    const expectedResult = invalidInputMessage;
                    expect(result).toBe(expectedResult);
                });
            });
        });
    });
});
