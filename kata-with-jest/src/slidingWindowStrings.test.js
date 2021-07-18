import { findPermutations } from './slidingWindowStrings';

describe('slidingWindowStrings.js', ()=>{
  describe('findPermutations()', ()=>{
    describe('WHEN: Given a small string of 4 unique letters and a big string', ()=>{
      describe('AND: The big string only contains those 4 letters,', ()=>{
        it('THEN: It returns all of the small string that are present in the big string', ()=>{
          const smallString = 'dcba', bigString = 'abcdcbaaaaa';
          const expectedResult = {
            permutations: ['abcd', 'dcba'],
          };

          const result = findPermutations(smallString, bigString);

          expect(result.permutations).toEqual(expectedResult.permutations);
        });
        it('THEN: It returns those permutations\' locations in the big string.', ()=>{
          const smallString = 'dcba', bigString = 'abcdcbaaaaa';
          const expectedResult = {
            indexes: [0, 3],
          };

          const result = findPermutations(smallString, bigString);

          expect(result.indexes).toEqual(expectedResult.indexes);
        });
      })
    });
    describe('AND: The big string only contains the small strings\' letters plus other letters', ()=>{
      it('THEN: It returns the permutations and the indexes', ()=>{
        const smallString = 'abba', bigString = 'abbabaXYZbaab';
        const expectedResult = {
          permutations: ['abba', 'baba', 'baab'],
          indexes: [0, 2, 9],
        };

        const result = findPermutations(smallString, bigString);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
