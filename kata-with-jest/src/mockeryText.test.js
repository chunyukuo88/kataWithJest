import convertToMockeryText from './mockeryText';

describe('mockeryText.js', ()=>{
  describe('mockeryText()', ()=>{
    describe('GIVEN: A valid string consisting of a single word, ', ()=>{
      it('THEN: It returns the string in mockery text, ', ()=>{
        const input = 'robot';
        const result = convertToMockeryText(input);
        const expectedResult = 'RoBoT';
        expect(result).toEqual(expectedResult);
      });
    });
    describe('GIVEN: A valid string with spaces, ', ()=>{
      it('THEN: It returns the string in mockery text, ignoring the spaces', ()=>{
        const input = 'facts and logic';
        const result = convertToMockeryText(input);
        const expectedResult = 'FaCtS AnD LoGiC';
        expect(result).toEqual(expectedResult);
      });
      it('THEN: It returns the string in mockery text, and a non-initial \'i\' is never capitalized.', ()=>{
        const input = 'iiiz';
        const result = convertToMockeryText(input);
        const expectedResult = 'IiiZ';
        expect(result).toEqual(expectedResult);
      });
    });
    describe('GIVEN: A valid string with punctuation, ', ()=>{
      it('THEN: It returns the string in mockery text, and the letter \'i\' is never capitalized.', ()=>{
        const input = "Ben Shapiro's facts & logic";
        const result = convertToMockeryText(input);
        const expectedResult = 'BeN ShApiRo\'S FaCtS & LoGiC';
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
