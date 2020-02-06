// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function containsLettersAndNums(input){
    let inputAsArray = input.split('');
    let result = false;
    for (let index = 0; index < inputAsArray.length; index++) {
        const element = inputAsArray[index];
        if (parseInt(element)*0 === 0){
            result = true;
            break;
        }
    } 
    return result;
}

function produceIntegerComponent(input){
    let inputAsArray = input.split('');
    let result = '';
    for (let index = 0; index < inputAsArray.length; index++) {
        const element = inputAsArray[index];
        if (parseInt(element)*0 === 0){
            result += element;
        }
    } 
    return parseInt(result);
}


function incrementString(inputString){
    if (inputString === '')
        return '1';
    else if (Number.isInteger(parseInt(inputString, 10)))
        return (parseInt(inputString, 10)+1).toString();
    else if (containsLettersAndNums(inputString))
        return lettersAndNumbersIncrement(inputString);
    else
        return inputString + '1';
}

function lettersAndNumbersIncrement(inputString){
    let inputArray = inputString.split('');
    let letterComponent = '';
    let numberComponent = '';
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        if(element === '0')
            letterComponent += element;
        else if (parseInt(element, 10)*0 === 0)
            numberComponent += element;
        else
            letterComponent += element;
    }
    numberComponent = parseInt(numberComponent) + 1;
    let tobeAppendedToLetterComponent = numberComponent + '';

    console.log(letterComponent + tobeAppendedToLetterComponent);
    return letterComponent + tobeAppendedToLetterComponent;
}

module.exports = {incrementString, 
                  containsLettersAndNums,
                  produceIntegerComponent};