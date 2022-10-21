// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
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
    describe('WHEN: that argument is a bunch of variously capitalized words,', () => {
      it('THEN: It removes spaces, capitalizes them all, and adds a hashtag.', () => {
        const str = '  Fine day For some Code ';
        const expectedResult = '#FineDayForSomeCode';

        const result = generateHashtag(str);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
