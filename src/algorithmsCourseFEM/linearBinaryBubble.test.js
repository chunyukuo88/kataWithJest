import {
  linearSearch,
  bubbleSort,
  mergeSort } from './linearBinaryBubble';

describe('linearBinaryBubble.js', ()=>{
  describe('linearSearch()', ()=>{
    describe('WHEN: Given a list and a number that is contained in that list, ', ()=>{
      it('THEN: It returns the index of the number in the array', ()=>{
        const [list, number] = [[2,6,7,90,103], 90];
        const expectedResult = 3;

        const result = linearSearch(list, number);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Given a list and a number that is NOT contained in that list, ', ()=>{
      it('THEN: It returns -1', ()=>{
        const [list, number] = [[2,6,7,90,103], 900000000000];
        const expectedResult = -1;

        const result = linearSearch(list, number);

        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Given a list and a number that is contained in that list multiple times, ', ()=>{
      it('THEN: It returns the index of the first occurrence of the number in the array', ()=>{
        const [list, number] = [[2,6,7,90,90,90,103], 90];
        const expectedResult = 3;

        const result = linearSearch(list, number);

        expect(result).toEqual(expectedResult);
      });
    });
  });
  describe('bubbleSort()', ()=>{
    describe('WHEN: Given a list of numbers, ', ()=>{
      it('THEN: It sorts them.', ()=>{
        const originalList   = [ 9, 2, 5, 6, 4, 7 ];
        const expectedResult = [ 2, 4, 5, 6, 7, 9 ];

        const result = bubbleSort(originalList);

        expect(result).toEqual(expectedResult);
      });
    });
  });
  describe('mergeSort()', ()=>{
    describe('WHEN: Given a list of numbers, ', ()=>{
      it('THEN: It sorts them.', ()=>{

      });
    });
  });
});
