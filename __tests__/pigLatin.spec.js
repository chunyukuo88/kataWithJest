const pigLatinSentence = require("../src/pigLatin");

describe("Can convert sentences to pig latin", ()=> {
    
    // test("Turn a single word into pig latin", () => {
    //     let input = "pig";
    //     expect(pigLatin(input)).toEqual("igpay");
    // })

    test("Turn a sentence into pig latin", () => {
        let input = "pig roast bonanza";
        expect(pigLatinSentence(input)).toEqual("igpay oastray onanzabay");
    })
})