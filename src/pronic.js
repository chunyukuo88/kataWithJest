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

function isPronic(integer){
    let isPronic = false;
    if (integer === 0){
        isPronic = true;
        return isPronic;
    } else if (integer === 1){
        return isPronic;
    } else {
        let multiples = produceMultiples(integer);
        if (multiples.length === 2 && multiples[1] - multiples[0] === 1){
            isPronic = true;
            return isPronic;
        } else if (multiples.length === 2 && multiples[1] - multiples[0] !== 1) {
            return isPronic;
        } else {
            for (let index = 0; index < multiples.length; index++) {
                const element = multiples[index];
                const oneLess = multiples[index-1];
                const oneMore = multiples[index+1];

                if ((element * oneLess === integer && element-oneLess === 1) || 
                    (element * oneMore === integer && oneMore-element === 1)){
                    isPronic = true;
                    break;
                }
            }
        }
        return isPronic;
    }
}

module.exports = pronic;