export const pigLatinConverter = input => {
    const inputIsValid = checkInputValidity(input);
    return (inputIsValid)
        ? pigLatinize(input)
        : invalidInputMessage;
};

const checkInputValidity = (input) => {
    if (typeof input !== 'string' || input === undefined || input === null) return false;
    if (!inputIsWord(input)) return false;
    return true;
};

const inputIsWord = (input) => {
    const userInputAsArray = input.split('');
    let inputIsWord = true;
    userInputAsArray.forEach(char => {
        if (!isCharacterALetter(char)) inputIsWord = false;
    })
    return inputIsWord;
};

const isCharacterALetter = char => {
    return (/[a-zA-Z]/).test(char);
};

const pigLatinize = (input) => {
    const userInputAsArray = input.split('');
    //Add functionality for vowels, multiple consonants, etc..
    const count = countNumberOfInitialConsonants(userInputAsArray);
    const result = latinizeBasedOnConsonantCount(userInputAsArray, count);
    return result;
};

const latinizeBasedOnConsonantCount = (arr, count) => {
    const consonantsToBeMoved = []
    for (let i = 0; i < count; i++) {
        consonantsToBeMoved.push(arr[i]);
    };
    for (let i = 0; i < count; i++) {
        arr.splice(0, 1);
    };
    const clippedArr = arr.join('')
    const combinedConsonantsToBeMoved = consonantsToBeMoved.join('');
    const result = clippedArr + combinedConsonantsToBeMoved + 'ay';
    return result;
};

const countNumberOfInitialConsonants = arr => {
    let numberOfInitialConsonants = 0;
    for (let letter of arr) {
       if (!isLetterAConsonant(letter)) {
           numberOfInitialConsonants++;
       }
        if (isLetterAConsonant(letter)) {
            break;
        };
    };
   return numberOfInitialConsonants;
};

const isLetterAConsonant = letter => {
    return (/[aeiou]/).test(letter);
};

export const invalidInputMessage = 'Please enter an ordinary word consisting of Latin letters only.'
