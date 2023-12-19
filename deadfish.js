// 'iiisdoso'

function convertToInteger(stringChunk) {
    const arr = stringChunk.split('');
    let integer = 0;
    arr.forEach(char => {
        if (char === 'i') {
            integer++;
        }
        if (char === 's') {
            integer = Math.pow(integer, 2);
        }
        if (char === 'd') {
            integer--;
        }
    });
    return integer;
}

export function deadfish(string) {
    const arr = string.split('');

    let chunks = '';
    while (arr.length > 0) {
        if (arr[0] !== 'o') {
            chunks = chunks + arr[0];
        } else {
            chunks += arr[0] + ' ';
        }
        arr.shift();
    }
    
    return chunks
            .split(' ')
            .map(chunk => convertToInteger(chunk));
}

console.log(deadfish('iiisdoiiso'));