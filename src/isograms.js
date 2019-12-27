

function isIsogram(word) {
    let x = 0;
    const sortedWord = word.toLowerCase().split('').sort();
    for (let i = 1 ; i < sortedWord.length ; i++) {
        if (sortedWord[i] == sortedWord[i-1] || sortedWord[i] == sortedWord[i+1]){
            x += 1;
        }
    }

    if (x == 0) {
        return true;
    } else {
        return false;
    }
    
}

// module.exports = sortChars;
module.exports = isIsogram;