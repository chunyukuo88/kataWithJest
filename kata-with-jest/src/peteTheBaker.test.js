import * as functions from './peteTheBaker';

describe('peteTheBaker.js', ()=>{
  describe('checkForIngredientAvailability()', ()=>{
    describe('WHEN: Pete has the ingredients to make at least one batch of the recipe,', ()=>{
      test('THEN: It returns the boolean true, meaning the recipe can be made.', ()=>{
        const recipe = {
          a: 1,
          b: 2,
          c: 3
        };
        const available = {
          a: 1,
          b: 2,
          c: 300
        };
        const result = functions.canMakeAtLeastOne(recipe, available);
        const expectedResult = true;
        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Pete has an ingredient but in insufficient quantity,', ()=>{
      test('THEN: It returns the boolean false, meaning the recipe can"t be made.', ()=>{
        const recipe = {
          a: 1,
          b: 2,
          c: 3
        };
        const available = {
          a: 1,
          b: 2,
          c: 0
        };
        const result = functions.canMakeAtLeastOne(recipe, available);
        const expectedResult = false;
        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Pete is missing an ingredient,', ()=>{
      test('THEN: It returns the boolean false, meaning the recipe can"t be made.', ()=>{
        const recipe = {
          a: 1,
          b: 2,
          c: 3
        };
        const available = {
          a: 1,
          b: 2
        };
        const result = functions.canMakeAtLeastOne(recipe, available);
        const expectedResult = false;
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
