// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  //find the midpoint or middle index first
  const midpoint = Math.floor((2 * n -1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    
    //total column length for pyramid problem is n * 2 - 1
    for (let col = 0; col < 2 * n -1; col++){
      //need to add # to the left and right index of the midpoint
      //ex. midpoint at 3rd index, at row = 1, 3-1=2 (2nd index) 3+1=4 (4th index)
      if (midpoint - row <= col && midpoint + row >= col){
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;
