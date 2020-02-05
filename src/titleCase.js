module.exports = {

    capitalizeFirstWord(sentenceString){
        return sentenceString[0].toUpperCase() + sentenceString.substring(1);
    },

    capitalizeAllInitials(sentenceString){
        const arrayOfWords = sentenceString.split(' ');
        let result = [];
        arrayOfWords.forEach(element => {
            result.push(this.capitalizeFirstWord(element) + ' ');
        });
        return result.join('').trim();
    },

    titleCase(sentenceString, minorWords){
        let minorWordsArray = minorWords.split(' ');
        let sentenceAsArray = sentenceString.split(' ');
        let result = [];
        sentenceAsArray.forEach(element => {
            if (minorWordsArray.includes(element))
                result.push(element + ' ');
            else 
                result.push(this.capitalizeFirstWord(element) + ' ');
        });
        return result.join('').trim();
    }
}