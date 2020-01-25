

function    pigLatin(inputString){
        return inputString.substring(1, inputString.length) + inputString.charAt(0) + "ay";
    }

function    pigLatinSentence(inputString){
        let inputAsArray = inputString.split(" ");
        let result = '';
        for (let index = 0; index < inputAsArray.length; index++) {
            const element = inputAsArray[index];
            result += (element.substring(1, element.length) + element.charAt(0) + 'ay') + ' ';
        }
        console.log(result.trim());
        return result.trim();
    }


module.exports = {
    pigLatin,
    pigLatinSentence
  };