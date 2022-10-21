import { generateHashtag } from "./hashtagGenerator";

describe('generateHashtag()', () => {
  describe('GIVEN: This function is passed an argument of invalid length,', () => {
    describe('WHEN: that argument is an empty string,', () => {
      test('THEN: It returns the `false` boolean.', () => {
        const str = '';
        const expectedResult = false;

        const result = generateHashtag(str);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: that argument is a string of multiple spaces,', () => {
      test('THEN: It returns the `false` boolean.', () => {
        const str = '   ';
        const expectedResult = false;

        const result = generateHashtag(str);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: that argument is a string with a length in excess of 140 chars,', () => {
      test('THEN: It returns the `false` boolean.', () => {
        const str = 'this string is longer than 140 chars.                                                                                                                                       !';
        const expectedResult = false;

        const result = generateHashtag(str);

        expect(result).toEqual(expectedResult);
      });
    });
  });
  describe('GIVEN: This function is passed an argument consisting of valid length,', () => {
    describe('WHEN: that argument is a single, lowercase word,', () => {
      it('THEN: It capitalizes the word and adds a hashtag.', () => {
        const str = 'word';
        const expectedResult = '#Word';

        const result = generateHashtag(str);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: that argument is a single word with a capitalized initial,', () => {
      it('THEN: It adds a hashtag.', () => {
        const str = 'Word';
        const expectedResult = '#Word';

        const result = generateHashtag(str);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
