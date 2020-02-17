// https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/javascript

function produceMultiples(integer){
    let array = [];
    for (let i = integer; i > 0; i--) {
        if (integer % i === 0)
            array.push(i);
    }
    let result = array.sort(function(a, b){return a-b});
    console.log(result);
    return result;
}

function pronic(integer){
    let isPronic = false;
    if (integer === 0){
        isPronic = true;
        return isPronic;
    } else if (integer === 1){
        return isPronic;
    } else {
        let multiples = produceMultiples(integer);
        for (let index = 0; index < multiples.length; index++) {
            const element = multiples[index];
            if (element * multiples[index-1] === integer || element * multiples[index+1] === integer){
                isPronic = true;
                break;
            }
        }
        return isPronic;
    }
}

module.exports = pronic;