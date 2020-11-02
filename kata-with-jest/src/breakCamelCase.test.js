import * as functions from './breakCamelCase';

describe('breakCamelCase.js', ()=>{
  describe('addSpaceIfUppercase()', ()=> {
    describe('WHEN: Given an uppercase char,', ()=>{
      test('THEN: It adds a space to the char.', ()=> {
        const result = functions.addSpaceIfUppercase('D');
        const expectedResult = ' D';
        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Given a lowercase char,', ()=>{
      test('THEN: It does not add a space to the char.', ()=> {
        const result = functions.addSpaceIfUppercase('d');
        const expectedResult = 'd';
        expect(result).toEqual(expectedResult);
      });
    });
    describe('addSpaceToCharsInArray()', ()=> {
      describe('WHEN: Given an array of chars,', ()=>{
        test('THEN: It returns an array where capitalized chars have added spaces before them.', ()=> {
          const input = ['t', 'e', 's', 't', 'M', 'e'];
          const result = functions.addSpaceToCharsInArray(input);
          const expectedResult = ['t', 'e', 's', 't', ' M', 'e']; //Note the space before 'M'.
          expect(result).toEqual(expectedResult);
        });
      })
    });
    describe('solution()', ()=> {
      describe('WHEN: Given a string,', ()=>{
        test('THEN: It returns a string where capitalized chars have added spaces before them.', ()=> {
          const input = 'testMe';
          const result = functions.solution(input);
          const expectedResult = 'test Me'; //Note the space before 'M'.
          expect(result).toEqual(expectedResult);
        });
      })
    });
  });
});
