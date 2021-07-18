import { checkPermutation } from './checkPermutation';

describe('checkPermutation()', ()=>{
  describe('GIVEN: A string that is a permutation of the other', ()=>{
    it('THEN: It returns TRUE', ()=>{
      const [oneString, theOther] = ['abc', 'cba'];

      const result =  checkPermutation(oneString, theOther);

      expect(result).toEqual(true);
    });
  });
  describe('GIVEN: A string that is NOT a permutation of the other', ()=>{
    it('THEN: It returns TRUE', ()=>{
      const [oneString, theOther] = ['abc', 'xyz'];

      const result =  checkPermutation(oneString, theOther);

      expect(result).toEqual(false);
    });
  });
});
