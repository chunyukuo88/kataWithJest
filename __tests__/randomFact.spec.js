const randomIntOneToTen = require('../src/randomFact');

describe('produces random numbers', ()=>{
    it('can produce the number one using Math.random.', ()=>{
        const result = randomIntOneToTen();
        expect(result).toBe(1);
    })
})