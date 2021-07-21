import { convert, addSpacesToStringArray, produce2DArray } from './zigzagConversion';


describe('addSpacesToStringArray()', ()=>{
  describe('WHEN: A 7-char array and a number of rows equal to 3,', ()=>{
    it('THEN: The helper function produces a two-dimensional array with the shape of the result.', ()=>{
      const arr = ['D', 'A', 'S', 'B', 'R', 'O', 'T'];
      const numberOfRows = 3;
      const expectedResult = ['D', 'A', 'S', '_', 'B', '_', 'R', 'O', 'T'];

      const result = addSpacesToStringArray(arr, numberOfRows);

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

      const result = addSpacesToStringArray(arr, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
});
