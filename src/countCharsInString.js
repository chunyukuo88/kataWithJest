/*
Sauce:
https://tinyurl.com/vd6ntvp
*/

module.exports = {
    produceOrderedArray(string){
        const inputArray = string.split('')
        return inputArray.sort();
    },

    produceCharCounts(string){
        const orderedArray = this.produceOrderedArray(string);
        let countedChars = new Map(); 
        orderedArray.forEach(element => {
            if(countedChars.has(element) === false){
                countedChars.set(element, 1);
            } else {
                let existingValue = countedChars.get(element);
                console.log(`\n\n\n\n==========Existing value: ${existingValue}==========\n\n\n\n`);
                countedChars.set(element, existingValue+1);
            }
        });
        return countedChars;
    }
}