// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  //iterate through rows
  for (let row=0; row<n; row++){
    let stair = '';
    //iterate through columns
    for (let col=0; col<n; col++){
      //if current col is less or equal to row, add #
      if (col <= row){
        stair += "#";
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
