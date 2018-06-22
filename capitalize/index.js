// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //split the string by spaces
  const words = str.split(" ");
  const capitalized = [];
  for (var i = 0; i < words.length; i++){
    //capitalized the first letter then combine with the rest of the letters
    //push it to the array
    capitalized.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  //then join all words together with space in between
  return capitalized.join(' ')
}

module.exports = capitalize;
