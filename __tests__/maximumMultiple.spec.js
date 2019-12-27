const maxMultiple = require("../src/maximumMultiple");

describe("Maximum multiple", ()=> {

    test("Can return all multiples", ()=> {

    const divisor = 37;
    const bound = 200;

    let output = maxMultiple(divisor, bound);
    let result = 185;

    expect(output).toEqual(result);
    })
})