import { isUnique, isUniqueHardMode } from './isUniqueWithConstraints';

describe('isUniqueWithConstraints.js', ()=>{
  describe('isUnique()', ()=>{
    describe('GIVEN: I CAN use additional data structures,', ()=>{
      describe('WHEN: I pass in a string with all unique characters,,', ()=>{
        it('THEN: It returns TRUE.', ()=>{
          const stringOfUniqueChrs = 'abc';
          const result = isUnique(stringOfUniqueChrs);

          expect(result).toBeTruthy();
        });
      });
      describe('WHEN: I pass in a string with repeated characters,,', ()=>{
        it('THEN: It returns FALSE.', ()=>{
          const stringOfUniqueChrs = 'foot';
          const result = isUnique(stringOfUniqueChrs);

          expect(result).toBeFalsy();
        });
      });
    });
  });
  describe('isUniqueHardMode()', ()=>{
    describe('GIVEN: I CAN\'T use additional data structures,', ()=>{
      describe('WHEN: I pass in a string with all unique characters,', ()=>{
        it('THEN: It returns TRUE.', ()=>{
          const stringOfUniqueChrs = 'abc';
          const result = isUniqueHardMode(stringOfUniqueChrs);

          expect(result).toBeTruthy();

        });
      });
      describe('WHEN: I pass in a string with repeated characters,,', ()=>{
        it('THEN: It returns FALSE.', ()=>{
          const stringOfUniqueChrs = 'foot';
          const result = isUniqueHardMode(stringOfUniqueChrs);

          expect(result).toBeFalsy();
        });
      });
    });
  });
});
