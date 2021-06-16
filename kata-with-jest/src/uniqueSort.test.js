import { uniqueSort } from './uniqueSort';

describe('uniqueSort.js', ()=>{
  describe('uniqueSort()', ()=>{
    describe('GIVEN: An array of unique integers.', ()=>{
      it('THEN: It returns those integers in a sorted array.', ()=>{
        const input = [100, 1, 50];
        const expectedResult = [1, 50, 100];

        const result = uniqueSort(input);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('GIVEN: An array of integers that includes repetitions.', ()=>{
      it('THEN: It returns only the unique integers in a sorted array.', ()=>{
        const input = [1, 100, 1, 50, 1];
        const expectedResult = [1, 50, 100];

        const result = uniqueSort(input);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
