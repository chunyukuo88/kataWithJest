export const convertToPigLatin = input => {
    const inputIsValid = checkInputValidity(input);
    if (!inputIsValid) return invalidInputMessage;
    if (wordBeginsWithSQU(input) || wordBeginsWithQU(input)) return convertSpecialCase(input);
    return pigLatinize(input);
};

export const invalidInputMessage = 'Please enter an unhyphenated word consisting of Latin letters only.'

const checkInputValidity = (input) => {
    if (typeof input !== 'string') return false;
    if (!inputIsWord(input)) return false;
    return true;
};

const convertSpecialCase = (input) => {
    const inputAsArr = input.split('');
    if (wordBeginsWithSQU(input)) {
        inputAsArr.splice(0, 3);
        const clippedArr = inputAsArr.join('');
        return clippedArr + 'squay';
    }
    inputAsArr.splice(0, 2);
    const clippedArr = inputAsArr.join('');
    return clippedArr + 'quay';
}

const wordBeginsWithSQU = (str) => (str.substring(0,3) === 'squ');

const wordBeginsWithQU = (str) => (str.substring(0,2) === 'qu');

const inputIsWord = (input) => {
    const userInputAsArray = input.split('');
    let inputIsWord = true;
    userInputAsArray.forEach(char => {
        if (!charIsALetter(char)) inputIsWord = false;
    });
    return inputIsWord;
};

const charIsALetter = char => (/[a-zA-Z]/).test(char);

const pigLatinize = (input) => {
    const count = countNumberOfInitialConsonants(input.split(''));
    return latinizeBasedOnConsonantCount(input.split(''), count);
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

const appendWithOrWithoutInitialConsonants = (combinedConsonantsToBeMoved, clippedArr, arr) =>
  (combinedConsonantsToBeMoved.length > 0)
    ? clippedArr + combinedConsonantsToBeMoved + 'ay'
    : arr.join('') + 'yay';

const countNumberOfInitialConsonants = arr => {
    let numberOfInitialConsonants = 0;
    for (let letter of arr) {
        if (!isLetterAVowel(letter)) numberOfInitialConsonants++;
        if (isLetterAVowel(letter)) break;
    };
    return numberOfInitialConsonants;
};

const isLetterAVowel = letter => /[aeiou]/.test(letter);
