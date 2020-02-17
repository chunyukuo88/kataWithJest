// https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/javascript

// const produceMultiples = require('../src/pronic');
const pronic = require('../src/pronic');

describe ('valid cases.', ()=>{

    describe('input is zero.', ()=>{
        it('returns true', ()=>{
            const input = 0;
            const result = pronic(input);
            expect(result).toBe(true);
        })
    })

    describe('input is 1.', ()=>{
        it('returns false', ()=>{
            const input = 1;
            const result = pronic(input);
            expect(result).toBe(false);
        })
    })

    describe('input is 6.', ()=>{
        it('returns true', ()=>{
            const input = 6;
            const result = pronic(input);
            expect(result).toBe(true);
        })
    })



})

