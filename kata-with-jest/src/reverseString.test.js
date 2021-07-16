import { stringReverser, errorMessage } from './reverseString';

describe('stringReverser()', ()=>{
  describe('GIVEN: A valid single word', ()=>{
    it('THEN: It returns that word in reverse', ()=>{
      const word = 'word';
      const expectedResult = 'drow';

      const result = stringReverser(word);

      expect(result).toBe(expectedResult);
    });
  });
  describe('GIVEN: A invalid input', ()=>{
    describe('WHEN: There is NO input (undefined input)', ()=>{
      it('THEN: return the default error message.', ()=>{
        const result = stringReverser();

        expect(result).toBe(errorMessage);
      });
    });
    describe('WHEN: There is a null input', ()=>{
      it('THEN: return the default error message.', ()=>{
        const result = stringReverser(null);

        expect(result).toBe(errorMessage);
      });
    });
    describe('WHEN: There is some other non-string input', ()=>{
      it('THEN: return the default error message.', ()=>{
        const result = stringReverser(42);

        expect(result).toBe(errorMessage);
      });
    });
  });
});
