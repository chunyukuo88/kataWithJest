
//This function takes an array of words as an argument.
function empowerLittles(sentence) {

    for (let i = 0 ; i < sentence.length ; i++) {
        if (sentence[i].length < 4)
            sentence[i] = sentence[i].toUpperCase();
        else
            sentence[i] = sentence[i].replace(/[aeiou]/ig , "");
    }

    return sentence;
}

module.exports = empowerLittles;