
// This is from codewars. I didn't bother doing a test for this one.
https://www.codewars.com/kata/christmas-tree/train/javascript

function christmasTree(height) {

    let result = "";
    let j = height;
    for (let i = 0; i < height ; i++, j--){
        result += (" " * (j)) + ("*" * i);
    }
    console.log(result);
    return result;
}

