/*
    Sauce:
    https://tinyurl.com/radmzdn
*/

function arrayDiff(A, B){
    return (A.length === 0 || B.length === 0) ? A : _getUniqueElems(A, B);
}

function _getUniqueElems(A, B){
    return A.filter(element => !B.includes(element));
}

module.exports = arrayDiff;