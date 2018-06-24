// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //create empty matrix that will hold all matrix
  var matrix = [];
  for (let i = 1; i <= n; i++) {
   matrix.push([]);
  }

  /* Nested squares approach solution
  For example, for a matrix size of 7, start at the outermost square which is the 7x7
  Then the square inside 5x5, then 3x3 ... Square size is reduced by 2 each time
  First square starts at 0,0 index, next is 1,1 index then 2,2 index and so on..

  Top and bottom: col value changes
  Right and left: row value changes
  */

  let sqPos = 0;  //starting index position of the square (0,0)
  let sqSize = n; //size of the matrix
  let row;        //row index position
  let col;        //col index position
  let num = 1;    //matrix number - start from 1

  // loop for the square size, size reduces by 2 each time a square is complete
  // start from the outermost square, n by n
  // next square (n-2) by (n-2)...
  for (let i = sqSize; i >= 1; i-=2) {
    // start at (0,0) position
    row = sqPos;
    col = sqPos;

    // top of square
    for (let j = sqPos; j < sqSize + sqPos; j++) {
     matrix[row][j] = num;
     num++;
     col = j; //next loop, column index starts where this loop ends
    }

    // right side of square
    for (let j = row + 1; j < sqSize + sqPos; j++) {
     matrix[j][col] = num;
     num++;
     row = j;
    }

    // bottom of square
    for (let j = row - 1; j >= sqPos; j--) {
     matrix[row][j] = num;
     num++;
     col = j;
    }

    // left side of square
    for (let j = row - 1; j >= sqPos + 1; j--) {
     matrix[j][col] = num;
     num++;
     row = j;
    }

    //square size reduces by 2, start index position increases by 1
    sqSize-=2;
    sqPos++;

    if (sqSize <= 0) {
     return matrix;
    }

  }

}

module.exports = matrix;
