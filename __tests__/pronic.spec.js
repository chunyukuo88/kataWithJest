// https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/javascript


const isisPronic = require('../src/isPronic');

describe ('valid cases.', ()=>{

    describe('input is zero.', ()=>{
        it('returns true', ()=>{
            const input = 0;
            const result = isPronic(input);
            expect(result).toBe(true);
        })
    })

    describe('input is 1.', ()=>{
        it('returns false', ()=>{
            const input = 1;
            const result = isPronic(input);
            expect(result).toBe(false);
        })
    })

    describe('input is 6.', ()=>{
        it('returns true', ()=>{
            const input = 6;
            const result = isPronic(input);
            expect(result).toBe(true);
        })
    })

    describe('input is 3048.', ()=>{
        it('returns false', ()=>{
            const input = 3048;
            const result = isPronic(input);
            expect(result).toBe(false);
        })
    })
})