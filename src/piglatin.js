function englishWordToPigLatin(word){
    if (determineIfWordIsInvalid(word)){
        return '';
    } 
    if (determineIfLetterIsVowel(word[0])) {
        return appendAyToWord(word);
    }
    return pigLatinizeMulticonsonantHeadedWords(word);    
}

function determineIfWordIsInvalid(word){
    return (!word || word.trim() === '');
}

function appendAyToWord(word){
    return word + 'ay';
}

function pigLatinizeMulticonsonantHeadedWords(word){
    let consonantChunk = '';
    for (let index = 0; index < word.length; index++) {
        const letter = word[index];
        if (!determineIfLetterIsVowel(letter)){
        consonantChunk += letter;
        } else
            break;   
    }
    let wordWithConsonantsMovedToEnd = word.substring(consonantChunk.length) + consonantChunk;
    return appendAyToWord(wordWithConsonantsMovedToEnd);
}

function determineIfLetterIsVowel(letter){
    return (letter === 'a' || 
            letter === 'e' || 
            letter === 'i' || 
            letter === 'o' || 
            letter === 'u' || 
            letter === 'y')
}

module.exports = englishWordToPigLatin;

//