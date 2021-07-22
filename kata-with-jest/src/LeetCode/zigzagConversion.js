// https://leetcode.com/problems/zigzag-conversion/

const convert = (s, numRows) => {
  const updatedArray = addUnderscoresToString(s, numRows).split('');
  const rows = {};
  for(let i = 0; i < numRows; i++){
    rows[i] = [];
    rows[i][i] = updatedArray[i];
  }
};

const addUnderscoresToString = (s, numRows) => {
  const arr = s.split('');
  let updatedArray = arr.map(char => char);
  let len = updatedArray.length;
  const underscores = getUnderscores(numRows);
  for (let i = (numRows-1); i < len - (numRows); i++) {
    if (i === numRows) {
      spliceBasedOnNumberOfRows(updatedArray, i, underscores, numRows);
    }
  }
  updatedArray = updatedArray.join('');
  return updatedArray;
};

const spliceBasedOnNumberOfRows = (updatedArray, i, underscores, numRows) => {
  for (let x = 0; x < numRows - 1; x++) {
    updatedArray.splice(i + (x * 2), 0, underscores);
  }
};

const getUnderscores = (numRows) => {
  let underscores = '';
  let x = 0;
  while (x < numRows - 2) {
    underscores += '_';
    x++;
  }
  return underscores;
};

const produce2DArray = (stringAsArray, numRows) => {
  const rows = {};
  for(let i = 0; i < numRows; i++) {
    rows[i] = [];
  }
};

export { convert, addUnderscoresToString, produce2DArray };



// Instructions:
/**
 j       s
 a     e m
 l   w   e
 i o     $
 l       $

 maybeitstimefor5

 m         m
 a       i e
 y     t   f
 b   s     o
 e t       r
 i         5

 *
 *                                      2:0
 xxx_y_xxxx                             3:1,1
 1234__a__a__a__1234                    4:2,2,2
 12345___3___3___3___3___12345          5:3,3,3,3
 123456____a____a____a____123456        6:4,4,4,4,4
 1234567_____5_____5_____5_____1234567  7:5,5,5,5,5,5

 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)



 D   R
 A B O
 S   T
 s[5] = s[0] + 2
 s[6] = s[1] + 2
 s[7] = s[2] + 2
 s[3] = s[0] + 1 & down 1


 s = 14
 rows = 3
 cols = 4
 diag = 3
 P   A   H   N
 A P L S I I G
 Y   I   R
 s[5] = s[0] + 2
 s[6] = s[1] + 2
 s[7] = s[2] + 2
 s[3] = s[0] + 1 & down 1
 ===
 s[8] = s[0] + 4

 And then read line by line: "PAHNAPLSIIGYIR"

 s = 14
 rows = 4
 cols = 3
 diag = 2
 P     I    N
 A   L S  I G
 Y A   H R
 P     I

 Write the code that will take a string and make this conversion given a number of rows:

 string convert(string s, int numRows);


 Example 1:

 Input: s = "PAYPALISHIRING", numRows = 3
 Output: "PAHNAPLSIIGYIR"
 Example 2:

 Input: s = "PAYPALISHIRING", numRows = 4
 Output: "PINALSIGYAHRPI"
 Explanation:

 s = 14
 rows = 4
 cols = 3
 diag = 2

 P     I    N
 A   L S  I G
 Y A   H R  !
 P     I    !

 Example 3:

 Input: s = "A", numRows = 1
 Output: "A"


 Constraints:

 1 <= s.length <= 1000
 s consists of English letters (lower-case and upper-case), ',' and '.'.
 1 <= numRows <= 1000

 P           G
 A         N
 Y       I
 P     R
 A   I
 L H
 I



 * */
