

function maxMultiple(divisor, bound){

    let divisableNumbers = [];
    for (let i = divisor ; i <= bound ; i++){
        if (i % divisor == 0) {
            divisableNumbers.push(i);
        }
    }
    return divisableNumbers[divisableNumbers.length-1];
}

module.exports = maxMultiple;