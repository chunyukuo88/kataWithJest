function pigLatin(inputString){
    return inputString.substring(1, inputString.length) + inputString.charAt(0) + "ay";
}

function pigLatinSentence(inputString){
    let inputAsArray = inputString.split(" ");
    
}

module.exports = pigLatin;
module.exports = pigLatinSentence;