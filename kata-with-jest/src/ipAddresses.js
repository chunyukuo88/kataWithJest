function ipsBetween(start, end){
    const startAsArrayOfIntegers = convertInputIntoIntArray(start);
    const endAsArrayOfIntegers = convertInputIntoIntArray(end);
    const startAsSumOfInts = getSumOfIntegers(startAsArrayOfIntegers);
    const endAsSumOfInts = getSumOfIntegers(endAsArrayOfIntegers);
    return endAsSumOfInts - startAsSumOfInts;
};

const convertInputIntoIntArray = string => {
    const arrayOfStrings = string.split('.');
    const arrayOfIntegers = [];
    arrayOfStrings.forEach(string => arrayOfIntegers.push(parseInt(string, 10)));
    return arrayOfIntegers;
};

const getSumOfIntegers = arrayOfIntegers => {
    let sum = 0;
    for (let i = 3; i > -1; i--) {
       if (i === 3 && arrayOfIntegers[i] > 0) {
           sum += (arrayOfIntegers[i]);
       };
       if (i === 2 && arrayOfIntegers[i] > 0) {
           sum += (arrayOfIntegers[i] * Math.pow(256, 1) - 1);
           if (arrayOfIntegers[i] === 1) sum += 1;
       };
       if (i === 1 && arrayOfIntegers[i] > 0) {
           sum += (arrayOfIntegers[i] * Math.pow(256, 2) - 1);
           if (arrayOfIntegers[i] === 1) sum += 1;
       }
        if (i === 0 && arrayOfIntegers[i] > 0) {
           sum += (arrayOfIntegers[i] * Math.pow(256, 3) - 1);
       }
    };
    return sum;
};

export default ipsBetween;
