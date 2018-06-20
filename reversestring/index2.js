// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //create empty string
  let reversed = '';

  //this is a new syntax for 'for loops'
  for (let character of str){
    //takes each character of str and add it to the 'start' of the 'reversed' string
    reversed = character + reversed;
  }

  return reversed;

}
module.exports = reverse;
