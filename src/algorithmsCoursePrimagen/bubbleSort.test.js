import { bubbleSort } from './bubbleSort';

describe('GIVEN: ', () => {
  describe('WHEN: ', () => {
    it('THEN: ', () => {
      const unsorted = [ 2, 3, 1, 8, 5 ];
      const sorted =   [ 1, 2, 3, 5, 8 ];
      const result = bubbleSort(unsorted);

      // expect(result).toEqual(sorted);
    });
  });
});
