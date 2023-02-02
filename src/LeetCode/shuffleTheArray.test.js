import { shuffleTheArray } from './shuffleTheArray';

/**
 * Sauce: https://leetcode.com/problems/shuffle-the-array/
 *
 * Constraints:
 *
 * 1 <= n <= 500
 * nums.length == 2n
 * 1 <= nums[i] <= 10^3
 *
**/
describe('GIVEN: an array of numbers, its length an even number', ()=>{
  describe('WHEN: this function is invoked,', ()=>{
    test('THEN: it returns a shuffled array', ()=>{
      const nums = [2,5,1,3,4,7];
      const n = 3;
      const expectedOutput = [2,3,5,4,1,7];

      const result = shuffleTheArray(nums, n);

      expect(result).toEqual(expectedOutput);
    });
  });
});