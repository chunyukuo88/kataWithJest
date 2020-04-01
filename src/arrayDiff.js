/*
    Sauce:
    https://tinyurl.com/radmzdn
*/

function arrayDiff(A, B){
    // let common = [];
    if (A.length === 0 || B.length === 0)
        return A;
    else
        return _getUniqueElems(A, B);
}

function _getUniqueElems(A, B){
    let result = A.filter(element => !B.includes(element));
    console.log(result);
    return result;
}

module.exports = arrayDiff;