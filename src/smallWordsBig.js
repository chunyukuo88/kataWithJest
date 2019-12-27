
//This function takes an array of words as an argument.
function empowerLittles(sentence) {
    words = sentence.split(' ');
    for (let i = 0 ; i < words.length ; i++) {
        if (words[i].length < 4)
        words[i] = words[i].toUpperCase();
        else
        words[i] = words[i].replace(/[aeiou]/ig , "");
    }
    sentence = words.join(' ');

    console.log(sentence);
    return sentence;
}

module.exports = empowerLittles;