import convertToMockeryText from './mockeryText';

describe('mockeryText.js', ()=>{
  describe('mockeryText()', ()=>{
    describe('GIVEN: A valid string, ', ()=>{
      it('THEN: It returns the string in mockery text, ', ()=>{
        const input = 'rabbit';
        const result = convertToMockeryText(input);
        const expectedResult = 'RaBbIt';
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
