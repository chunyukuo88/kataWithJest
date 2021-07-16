import { uniqueSort } from './uniqueSort';

describe('uniqueSort.js', ()=>{
  describe('uniqueSort()', ()=>{
    describe('GIVEN: A sorted array of integers that includes repetitions.', ()=>{
      it('THEN: It returns the unique integers in a sorted array followed by a bunch of undefined\'s to represent the duplicates.', ()=>{
        const input = [ 1, 1, 2, 2, 3, 4, 4, 4, 4, 4 ];
        const expectedResult = [ 1, 2, 3, 4, undefined, undefined, undefined, undefined, undefined, undefined ];

        const result = uniqueSort(input);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
