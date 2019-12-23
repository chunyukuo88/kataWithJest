const divideTwoNumbers = require("../src/division");

describe("Division program", ()=> {
    
    test("should be able to divide two numbers and return result", () => {
        const m = 12;
        const n = 10;
        const x = 2;
        const y = 3;

        expect(divideTwoNumbers(m, y)).toEqual(4);
        expect(divideTwoNumbers(n, x)).toEqual(5);
    })
})