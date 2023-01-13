import { bubbleSort } from './bubbleSort';

describe('bubbleSort()', ()=>{

  describe('WHEN: Given a list of numbers that is sorted, ', ()=>{
    it('THEN: It returns the list as is.', ()=>{
      const originalList   = [ 1, 2, 3, 4, 5, 6 ];
      const expectedResult = [ 1, 2, 3, 4, 5, 6 ];

      const result = bubbleSort(originalList);

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: Given a list of numbers that is NOT sorted, ', ()=>{
    it('THEN: It returns the list as is.', ()=>{
      const originalList   = [ 1, 3, 2, 4, 6, 5 ];
      const expectedResult = [ 1, 2, 3, 4, 5, 6 ];

      const result = bubbleSort(originalList);
      console.log(result);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: Given a list of numbers that is reversed, ', ()=>{
    it('THEN: It returns the list as is.', ()=>{
      const originalList   = [ 6, 5, 4, 3, 2, 1 ];
      const expectedResult = [ 1, 2, 3, 4, 5, 6 ];

      const result = bubbleSort(originalList);

      console.log(result);

      expect(result).toEqual(expectedResult);
    });
  });
});
