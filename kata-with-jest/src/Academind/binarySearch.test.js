import { binarySearch } from './binarySearch';

describe('binarySearch()', ()=>{
  describe('GIVEN: a sorted array and a target number', ()=>{
    describe('WHEN: the target number is in the middle of the array', ()=>{
      it('THEN: It returns the index of the target number', ()=>{
        const array = [ 5, 6, 7, 8, 9 ];
        const targetNumber = 7;

        const result = binarySearch(array, targetNumber);

        expect(result).toEqual(2);
      });
    });
    describe('WHEN: the target number is NOT in the middle of the array', ()=>{
      it('THEN: It returns the index of the target number', ()=>{
        const array = [ 5, 6, 7, 8, 9 ];
        const targetNumber = 8;

        const result = binarySearch(array, targetNumber);

        expect(result).toEqual(3);
      });
    });
  });
});
