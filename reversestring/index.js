// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //split method - used to split strings into array substring
  const arr = str.split('');

  //reverse method - reverses the order of elements in an array
  arr.reverse();

  //join method - joins the elements of an array into a string and returns a string
  return arr.join('');
}
module.exports = reverse;
