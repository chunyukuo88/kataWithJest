import { joinElements, joinElementsIteratively } from './recursiveToIterative';

describe('recursiveToIterative.js', ()=>{
  const array = ['s', 'cr', 't cod'];
  const char = 'e';
  describe('joinElements()', ()=>{
    describe('WHEN: Given an array and a char to merge into the array,', ()=>{
      it('THEN: It merges the char into the array.', ()=>{
        const expectedResult = 'secret code';

        const result = joinElements(array, char);

        expect(result).toEqual(expectedResult);
      });
    });
  });
  describe('joinElementsIteratively()', ()=>{
    describe('WHEN: Given an array and a char to merge into the array,', ()=>{
      it('THEN: It merges the char into the array.', ()=>{
        const expectedResult = 'secret code';

        const result = joinElementsIteratively(array, char);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
