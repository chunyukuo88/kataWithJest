// Source:
// codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

export function topThreeWords(text) {
    const inputAsArray = text.split(' ');
    const { uniqueWords, wordsWithFreqs } = produceUniqueWordsAndFrequencies(inputAsArray);
    if (uniqueWords.length > 0)
        return getWordsByFrequency(wordsWithFreqs, uniqueWords.length);
    return [];
};

const produceUniqueWordsAndFrequencies = (arrayOfWords) => {
    const uniqueWords = [];
    const wordsWithFreqs = [];
    arrayOfWords.forEach(word => {
        if (/[a-z]/.test(word.toLowerCase())){
            const cleanedWord = removeInvalidPunctuation(word);
            populateFrequencyObject(cleanedWord, uniqueWords, wordsWithFreqs)
        }
    });
    return { uniqueWords, wordsWithFreqs };
}

const removeInvalidPunctuation = (word) => {
    const invalidPunctuation = new RegExp('[.!?/-]');
    const wordAsArray = word.split('');
    const cleanedUpWordAsArray = [];
    wordAsArray.forEach(char => {
       if (!invalidPunctuation.test(char)) cleanedUpWordAsArray.push(char);
    });
    return cleanedUpWordAsArray.join('');
}

const getWordsByFrequency = (wordsWithFreqs, numberOfUniqueWords) => {
    const sortedArray = wordsWithFreqs.sort((a, b) => b[1]- a[1]);
    if (numberOfUniqueWords > 2){
        const topThree = [];
        topThree.push(sortedArray[0][0]);
        topThree.push(sortedArray[1][0]);
        topThree.push(sortedArray[2][0]);
        return topThree;
    }
    if (numberOfUniqueWords === 2){
        const topTwo = [];
        topTwo.push(sortedArray[0][0]);
        topTwo.push(sortedArray[1][0]);
        return topTwo;
    }
    if (numberOfUniqueWords === 1){
        return [sortedArray[0][0]];
    }
}

const populateFrequencyObject = (w, uniqueWords, wordsWithFreqs) => {
    const word = w.toLowerCase();
    if (uniqueWords.includes(word)) {
        for (let i = 0; i < wordsWithFreqs.length; i++) {
            if (wordsWithFreqs[i][0] === word) {
                wordsWithFreqs[i][1] += 1;
            };
        };
    } else {
        uniqueWords.push(word);
        const wordPair = [word, 1];
        wordsWithFreqs.push(wordPair);
    };
};
