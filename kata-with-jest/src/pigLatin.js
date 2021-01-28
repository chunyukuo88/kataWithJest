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
}
const pigLatinize = (input) => {
    const userInputAsArray = input.split('');
    //Add functionality for vowels, etc.
    const consonantPlusAy = userInputAsArray[0] + 'ay';
    userInputAsArray.splice(0, 1);
    userInputAsArray.push(consonantPlusAy);
    const result = userInputAsArray.join('');
    return result;
};

export const invalidInputMessage = 'Please enter an ordinary word consisting of Latin letters only.'
