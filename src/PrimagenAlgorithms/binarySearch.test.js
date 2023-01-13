import { binarySearch } from './binarySearch';

describe('GIVEN: binarySearch() is invoked with a sorted array and a target number,', () => {
  describe('WHEN: the array contains the target number,', () => {
    it('THEN: returns the index of the number', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 20];
      const target = 7;
      const expectedIndex = 6;

      const result = binarySearch(sortedArray, target);

      // expect(result).toEqual(expectedIndex);
    });
  });
  describe('WHEN: the array does NOT contain the target number,', () => {
    it('THEN: returns an index of -1', () => {
      //
    });
  });
});
