const moreZeroes = require('../src/moreZeroesThan');

describe('Return array of chars w/o repeats or cases' +
         'where a character\'s binary has more zeroes' +
         'than ones.', ()=>{
    it('returns an array with duplicates deleted.', ()=>{
        const input = 'aaa';
        const result = moreZeroes(input);
        expect(result).toEqual(['a']);
    });
});