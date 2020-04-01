import {one, two, plus} from '../src/funcCalc';
// const one = require('../src/funcCalc');

describe('Where only one function is invoked at a time.', ()=> {
    describe('When only one function exists in funcCalc.js.', ()=>{
        it('returns the value of one() when no arguments are passed to it.', ()=>{
            expect(one()).toEqual(1);
        });
    });
    describe('When multiple functions exist in funcCalc.js.', ()=>{
        it('returns the value of two() when no arguments are passed to it.', ()=>{
            expect(two()).toEqual(2);
        })
    })

});
   
describe('Where two functions are invoked at a time.', ()=> {
    describe('Functions can add things.', ()=>{
        it('returns a simple increment using the two arguments passed to one().', ()=>{
            expect(one(plus(1))).toBe(2);
        })
    })
});

//    https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript --