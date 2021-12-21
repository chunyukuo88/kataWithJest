import { convert, addUnderscoresToString, produce2DArray } from './zigzagConversion';

describe('convert()', ()=>{
  describe('WHEN: ', ()=>{
    it('THEN: ', ()=>{
      const s = 'jalilowesme$$';
      const numRows = 5;
      convert(s, numRows);
    });
  });
});

describe('addUnderscoresToString()', ()=>{
  describe('WHEN: A 7-char array and a number of rows equal to 3,', ()=>{
    it('THEN: The helper function produces the updated string.', ()=>{
      const arr = 'DASBROT';
      const numberOfRows = 3;
      const expectedResult = 'DAS_B_ROT';

      const result = addUnderscoresToString(arr, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: A 10-char array and a number of rows equal to 4,', ()=>{
    it('THEN: The helper function produces the updated string.', ()=>{
      const arr = 'thewoobler';
      const numberOfRows = 4;
      const expectedResult = 'thew__o__o__bler';

      const result = addUnderscoresToString(arr, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: A 13-char array and a number of rows equal to 5,', ()=>{
    it('THEN: The helper function produces the updated string.', ()=>{
      const arr = 'jalilowesme$$';
      const numberOfRows = 5;
      const expectedResult = 'jalil___o___w___e___sme$$';

      const result = addUnderscoresToString(arr, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: A 16-char array and a number of rows equal to 6,', ()=>{
    it('THEN: The helper function produces the updated string.', ()=>{
      const s = 'maybeitstimefor!';
      const numberOfRows = 6;
      const expectedResult = 'maybei____t____s____t____i____mefor!';

      const result = addUnderscoresToString(s, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
});
