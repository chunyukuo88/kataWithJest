//Source:
//https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/

function lifePathNumber(dateOfBirth) {
    const dateOfBirthAsArray = dateOfBirth.split('-');
    let lifenum = 0;
    dateOfBirthAsArray.forEach(dateChunk => {
        const sumOfDateChunk = findSumOfDateChunk(dateChunk);
        lifenum += sumOfDateChunk;
    });
    while (lifenum > 9) {
        lifenum = processNumbersGreaterThanNine(lifenum);
    };
    return lifenum;
}

const findSumOfDateChunk = (chunk) => {
    let sum = 0;
    const chunkAsArray = chunk.split('');
    chunkAsArray.forEach(char => {
       if (char !== '0') sum += parseInt(char);
    });
    return sum;
};

const processNumbersGreaterThanNine = (int) => {
    const stringifiedInt = int.toString();
    const inputAsArr = stringifiedInt.split('');
    let sum = 0;
    inputAsArr.forEach(digit => {
        sum += parseInt(digit);
    });
    return sum;
};

export default lifePathNumber;
