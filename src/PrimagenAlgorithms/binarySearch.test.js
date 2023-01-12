import { binarySearch } from './binarySearch';

describe('GIVEN: binarySearch() is invoked with a sorted array and a target number,', () => {
  describe('WHEN: the array contains the target number,', () => {
    it('THEN: returns the index of the number', () => {
      const sortedArray = [1, 1, 1, 1, 2, 2, 5, 2];
      const target = 5;
      const expectedIndex = 6;

      expect(binarySearch(sortedArray, target)).toEqual(expectedIndex);
    });
  });
  describe('WHEN: the array does NOT contain the target number,', () => {
    it('THEN: returns an index of -1', () => {
      //
    });
  });
});
