import { convert } from './zigzagConversion';

describe('convert()', ()=>{
  describe('WHEN: A string and a number of rows equal to 3,', ()=>{
    it('THEN: It puts the string into a zigzag pattern.', ()=>{
      const inputString = "DASBROT"; // "The bread" in German
      const numberOfRows = 3;
      const expectedResult = "DRABOST";

      const result = convert(inputString, numberOfRows);

      expect(result).toEqual(expectedResult);
    });
  });
  // describe('WHEN: A string and a number of rows equal to 4,', ()=>{
  //   it('THEN: It puts the string into a zigzag pattern.', ()=>{
  //     const inputString = "PAYPALISHIRING";
  //     const numberOfRows = 4;
  //     const expectedResult = "PINALSIGYAHRPI";
  //
  //     const result = convert(inputString, numberOfRows);
  //
  //     expect(result).toEqual(expectedResult);
  //   });
  // });
  // describe('WHEN: A character and a number of rows equal to 1,', ()=>{
  //   it('THEN: It returns that character.', ()=>{
  //     const inputString = "A";
  //     const numberOfRows = 1;
  //     const expectedResult = "A";
  //
  //     const result = convert(inputString, numberOfRows);
  //
  //     expect(result).toEqual(expectedResult);
  //   });
  // });
});
