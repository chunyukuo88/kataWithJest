// From Codewars:
// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

const titleCase = require('../src/titleCase');

describe('It capitalizes the letters of first words and most words thereafter.', () => {

    it('capitalizes the first word of a string', () => {
        const input = 'theodore theorizes about the theremin.';
        const expectedOutput = 'Theodore theorizes about the theremin.';
        const result = titleCase.capitalizeFirstWord(input);
        expect(result).toBe(expectedOutput);
    })

    it('capitalizes the first letters of all other words, too.', () => {
        const input = 'theodore theorizes about the theremin.';
        const expectedOutput = 'Theodore Theorizes About The Theremin.';  
        const result = titleCase.capitalizeAllInitials(input);
        expect(result).toBe(expectedOutput);              
    })

    it('capitalizes the initials of only the first and specified words.', () => {
        const input = 'theodore theorizes about the theremin.';
        const minorWords = "the an of"
        const expectedOutput = 'Theodore Theorizes About the Theremin.';  
        const result = titleCase.titleCase(input, minorWords);
        expect(result).toBe(expectedOutput);         
    })
})