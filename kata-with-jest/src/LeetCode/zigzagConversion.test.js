import { convert, addUnderscoresToStringArray, produce2DArray } from './zigzagConversion';

describe('addSpacesToStringArray()', ()=>{
  describe('WHEN: A 7-char array and a number of rows equal to 3,', ()=>{
    it('THEN: The helper function produces the updated string.', ()=>{
      const arr = ['D', 'A', 'S', 'B', 'R', 'O', 'T'];
      const numberOfRows = 3;
      const expectedResult = 'DAS_B_ROT';

      const result = addUnderscoresToStringArray(arr, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: A 10-char array and a number of rows equal to 4,', ()=>{
    it('THEN: The helper function produces the updated string.', ()=>{
      const arr = [
        't', 'h', 'e', 'w', 'o', 'o', 'b', 'l', 'e', 'r'
      ];
      const numberOfRows = 4;
      const expectedResult = 'thew__o__obler';

      const result = addUnderscoresToStringArray(arr, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: A 14-char array and a number of rows equal to 5,', ()=>{
    it('THEN: The helper function produces the updated string.', ()=>{
      const arr = [
        'j', 'a', 'l', 'i', 'l', 'o', 'w', 'e', 's', 'm', 'e', '$', '$', '$'
      ];
      const numberOfRows = 5;
      const expectedResult = 'jalil___o___w___e___s___me$$$';

      const result = addUnderscoresToStringArray(arr, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
});
