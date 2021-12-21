import * as functions from './peteTheBaker';

describe('peteTheBaker.js', ()=>{
  describe('cakes()', ()=>{
    describe('WHEN: Pete does not have enough ingredients to make one cake', ()=> {
      test('THEN: It returns zero.', ()=>{
        const recipe =    { a: 1, b: 2,  c: 3 };
        const available = { a: 1, b: 2 };
        const result = functions.cakes(recipe, available);
        const expectedResult = 0;
        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Pete has enough ingredients to make one cake', ()=> {
      test('THEN: It returns the number of cakes he can make.', ()=>{
        const recipe =    { a: 1, b: 1, c: 3 };
        const available = { a: 3, b: 3, c: 6 };
        const result = functions.cakes(recipe, available);
        const expectedResult = 2;
        expect(result).toEqual(expectedResult);
      });
    });
  });

  describe('compareAmounts()', ()=>{
    describe('WHEN: Pete has enough ingredients to make one cake', ()=>{
      test('THEN: It returns the number of cakes he can make', ()=>{
        const recipe =    { a: 1, b: 1, c: 1};
        const available = { a: 2, b: 1, c: 3};
        const result = functions.calculatePossibleCakes(recipe, available);
        const expectedResult = 1;
        expect(result).toEqual(expectedResult);
      });
    });
  });

  describe('checkForIngredientAvailability()', ()=>{
    describe('WHEN: Pete has the ingredients to make at least one batch of the recipe,', ()=>{
      test('THEN: It returns the boolean true, meaning the recipe can be made.', ()=>{
        const recipe =    { a: 1, b: 2, c: 3 };
        const available = { a: 1, b: 2, c: 300 };
        const result = functions.canMakeAtLeastOne(recipe, available);
        const expectedResult = true;
        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Pete has an ingredient but in insufficient quantity,', ()=>{
      test('THEN: It returns the boolean false, meaning the recipe can"t be made.', ()=>{
        const recipe =    { a: 1, b: 2, c: 3 };
        const available = { a: 1, b: 2, c: 0 };
        const result = functions.canMakeAtLeastOne(recipe, available);
        const expectedResult = false;
        expect(result).toEqual(expectedResult);
      });
    });
    describe('WHEN: Pete is missing an ingredient,', ()=>{
      test('THEN: It returns the boolean false, meaning the recipe can"t be made.', ()=>{
        const recipe =    { a: 1, b: 2, c: 3 };
        const available = { a: 1, b: 2 };
        const result = functions.canMakeAtLeastOne(recipe, available);
        const expectedResult = false;
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
