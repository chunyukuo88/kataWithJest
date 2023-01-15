import { bubbleSort } from './bubbleSort';

describe('GIVEN: ', () => {
  describe('WHEN: the input array is unsorted', () => {
    it('THEN: bubbleSort returns a sorted array', () => {
      const unsorted = [ 2, 3, 1, 8, 5 ];
      const sorted =   [ 1, 2, 3, 5, 8 ];
      const result = bubbleSort(unsorted);

      expect(result).toEqual(sorted);
    });
  });
  describe('WHEN: the input array is sorted', () => {
    it('THEN: bubbleSort returns the array as-is', () => {
      const sorted =   [ 1, 2, 3, 5, 8 ];
      const result = bubbleSort(sorted);

      expect(result).toEqual(sorted);
    });
  });
});
