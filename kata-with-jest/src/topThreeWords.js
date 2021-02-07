// Source:
// codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

export function topThreeWords(text) {
    const inputAsArray = text.split(' ');
    const uniqueWords = [];
    const wordsWithFreqs = [];
    inputAsArray.forEach(word => {
        populateFrequencyObject(word, uniqueWords, wordsWithFreqs)
    });
    const wordsByFrequency = getWordsByFrequency(wordsWithFreqs);
    return wordsByFrequency;
};

const getWordsByFrequency = (wordsWithFreqs) => {
    const sortedArray = wordsWithFreqs.sort((a, b) => b[1]- a[1]);
    const topThree = [];
    topThree.push(sortedArray[0][0]);
    topThree.push(sortedArray[1][0]);
    topThree.push(sortedArray[2][0]);
    return topThree;
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


topThreeWords("A A A AND AND THE");
