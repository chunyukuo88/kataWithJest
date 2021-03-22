import convertToMockeryText from './mockeryText';

describe('mockeryText.js', ()=>{
  describe('mockeryText()', ()=>{
    describe('GIVEN: A valid string consisting of a single word, ', ()=>{
      it('THEN: It returns the string in mockery text, ', ()=>{
        const input = 'rabbit';
        const result = convertToMockeryText(input);
        const expectedResult = 'RaBbIt';
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
    });
  });
});
