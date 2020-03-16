function randomIntOneToTen (){
    let result = Math.floor(Math.random() * Math.ceil(10));
    console.log("The result is: " + result);
    return result;
};

module.exports = randomIntOneToTen;