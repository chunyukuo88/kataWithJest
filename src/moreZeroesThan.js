function moreZeroes(stringInput){
    populateBinaryConverter();
    let inputAsArray = stringInput.split('');
    let result = [];
    for (let index = 0; index < inputAsArray.length; index++) {
        const element = inputAsArray[index];
        if(asciiToBinary.has(element) === true && result.includes(element) === false)
            result.push(element);
    }
    return result;
}


module.exports = moreZeroes;

let asciiToBinary = new Map()
function populateBinaryConverter(){
    asciiToBinary.set('a', '01100001');
    asciiToBinary.set('b', '1100010');
    asciiToBinary.set('c', '1100011');
    asciiToBinary.set('d', '1100100');
    asciiToBinary.set('e', '1100101');
    asciiToBinary.set('f', '1100110');
    asciiToBinary.set('g', '1100111');
    asciiToBinary.set('h', '1101000');
    asciiToBinary.set('i', '1101001');
    asciiToBinary.set('j', '1101010');
    asciiToBinary.set('k', '1101011');
    asciiToBinary.set('l', '1101100');
    asciiToBinary.set('m', '1101101');
    asciiToBinary.set('n', '1101110');
    asciiToBinary.set('o', '1101111');
    asciiToBinary.set('p', '1110000');
    asciiToBinary.set('q', '1110001');
    asciiToBinary.set('r', '1110010');
    asciiToBinary.set('s', '1110011');
    asciiToBinary.set('t', '1110100');
    asciiToBinary.set('u', '1110101');
    asciiToBinary.set('v', '1110110');
    asciiToBinary.set('w', '1110111');
    asciiToBinary.set('x', '1111000');
    asciiToBinary.set('y', '1111001');
    asciiToBinary.set('z', '1111010');
};