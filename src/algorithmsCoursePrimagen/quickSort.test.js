import { quickSort } from './quickSort';

describe('GIVEN: an unordered arrayOfInts', ()=>{
  describe('WHEN: invoked,', ()=>{
    test('THEN: sorts them.', ()=>{
      const arrayOfInts = [15, 3, 2, 1, 9, 5, 7, 8, 6];
      const orderedInts = [1, 2, 3, 5, 6, 7, 8, 9, 15];

      const result = quickSort(arrayOfInts);

      expect(result).toEqual(orderedInts);
    });
  });
});
