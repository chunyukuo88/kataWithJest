function digitCounter(integer){
    const numberOfDigits = (integer + '').length;
    return numberOfDigits;
}

function exponentApplicator(integer){
    const exponent = digitCounter(integer);
    const arrayOfDigits = (integer + '').split('')
    console.log(arrayOfDigits);
    let sumOfExponentializedDigits = 0;
    arrayOfDigits.forEach(digit => sumOfExponentializedDigits += Math.pow(parseInt(digit), exponent));
    return sumOfExponentializedDigits;
}

function narcissistic(integer){
    let isNarcNum = false;
    if (integer < 10){
        isNarcNum = true;
    } else if (integer === exponentApplicator(integer)){
        isNarcNum = true;
    }
    return isNarcNum;
}

module.exports = digitCounter, exponentApplicator;