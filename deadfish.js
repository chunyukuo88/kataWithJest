// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

function parse(string) {
    const arr = string.split('');

    let integer = 0;
    const result = [];
  
    arr.forEach(char => {
      if (char === 'i') {
        integer = integer + 1;
      }
      if (char === 's') {
        integer = Math.pow(integer, 2);
      }
      if (char === 'd') {
        integer = integer - 1;
      }
      if (char === 'o') {
        result.push(integer);
      }
    });
  
    return result;
}
