export const convertToPigLatin = input => {
    const inputIsValid = checkInputValidity(input);
    const wordIsSpecialCase = checkIfWordIsSpecialCase(inputIsValid, input);
    if (wordIsSpecialCase) return convertSpecialCase(input);
    return (inputIsValid)
            ? pigLatinize(input)
            : invalidInputMessage;
};

const checkInputValidity = (input) => {
    if (typeof input !== 'string' || input === undefined || input === null) return false;
    if (!inputIsWord(input)) return false;
    return true;
};

const checkIfWordIsSpecialCase = (inputIsValid, word) => {
    if (inputIsValid) {
        const inputAsArr = word.split('');
        if (inputAsArr[0] === 's' && inputAsArr[1] === 'q' && inputAsArr[2] === 'u') return true;
        if (inputAsArr[0] === 'q' && inputAsArr[1] === 'u') return true;
    }
    return false;
};

const convertSpecialCase = (input) => {
    const inputAsArr = input.split('');
    if (inputAsArr[0] === 's' && inputAsArr[1] === 'q' && inputAsArr[2] === 'u') {
        inputAsArr.splice(0, 1);
        inputAsArr.splice(0, 1);
        inputAsArr.splice(0, 1);
        const clippedArr = inputAsArr.join('');
        return clippedArr + 'squay';
    }
    if (inputAsArr[0] === 'q' && inputAsArr[1] === 'u') {
        inputAsArr.splice(0, 1);
        inputAsArr.splice(0, 1);
        const clippedArr = inputAsArr.join('');
        return clippedArr + 'quay';
    }
}

const inputIsWord = (input) => {
    const userInputAsArray = input.split('');
    let inputIsWord = true;
    userInputAsArray.forEach(char => {
        if (!isCharacterALetter(char)) inputIsWord = false;
    });
    return inputIsWord;
};

const isCharacterALetter = char => {
    return (/[a-zA-Z]/).test(char);
};

const pigLatinize = (input) => {
    const userInputAsArray = input.split('');
    const count = countNumberOfInitialConsonants(userInputAsArray);
    const result = latinizeBasedOnConsonantCount(userInputAsArray, count);
    return result;
};

const latinizeBasedOnConsonantCount = (arr, count) => {
    const consonantsToBeMoved = [];
    for (let i = 0; i < count; i++) {
        consonantsToBeMoved.push(arr[i]);
    };
    for (let i = 0; i < count; i++) {
        arr.splice(0, 1);
    };
    const clippedArr = arr.join('');
    const combinedConsonantsToBeMoved = consonantsToBeMoved.join('');
    return appendWithOrWithoutInitialConsonants(combinedConsonantsToBeMoved, clippedArr, arr);
};

const appendWithOrWithoutInitialConsonants = (combinedConsonantsToBeMoved, clippedArr, arr) => {
    return (combinedConsonantsToBeMoved.length > 0)
        ? clippedArr + combinedConsonantsToBeMoved + 'ay'
        : arr.join('') + 'yay';
};

const countNumberOfInitialConsonants = arr => {
    let numberOfInitialConsonants = 0;
    for (let letter of arr) {
        if (!isLetterAVowel(letter)) numberOfInitialConsonants++;
        if (isLetterAVowel(letter)) break;
    };
   return numberOfInitialConsonants;
};

const isLetterAVowel = letter => (/[aeiou]/).test(letter);

export const invalidInputMessage = 'Please enter an ordinary word consisting of Latin letters only.'
