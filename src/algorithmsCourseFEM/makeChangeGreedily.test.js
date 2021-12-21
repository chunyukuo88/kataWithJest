import { makeChange } from './makeChangeGreedily';

describe('makeChange()', ()=>{
  describe('GIVEN: An integer representing the change that I have to return, equalling cents.', ()=>{
    describe('WHEN: The amount is 40,', ()=>{
      it('THEN: It returns the minimum number of coins required to make that change.', ()=>{
        const expectedResult = 3;

        const result = makeChange(40);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: The amount is 35,', ()=>{
      it('THEN: It returns the minimum number of coins required to make that change.', ()=>{
        const expectedResult = 2;

        const result = makeChange(35);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: The amount is 130,', ()=>{
      it('THEN: It returns the minimum number of coins required to make that change.', ()=>{
        const expectedResult = 6;

        const result = makeChange(130);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
