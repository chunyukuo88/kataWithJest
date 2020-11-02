import * as functions from './peteTheBaker';

describe('peteTheBaker.js', ()=>{
  describe('mapFieldsToArrayOfObjects()', ()=>{
    test('It maps the recipe ingredients as ingredient-value pairs.', ()=>{
      const recipeObject = {
        a: 'a',
        b: 'b'
      };
      const result = functions.mapFieldsToArrayOfObjects(recipeObject);
      const expectedResult = [{a: 'a'}, {b: 'b'}];
      expect(result).toEqual(expectedResult);
    });
  });
});
