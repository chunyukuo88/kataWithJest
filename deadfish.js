// 'iiisdoso'

function convertToInteger(stringChunk) {
    let integer = 0;
    stringChunk.split('').forEach(char => {
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
    while (arr.length > 1) {
        chunks = (arr[0] !== 'o')
            ? chunks + arr[0]
            : chunks + arr[0] + ' ';
        arr.shift();
    }
    
    return chunks
            .split(' ')
            .map(chunk => convertToInteger(chunk));
}

console.log(deadfish('iiisdoiiso'));