// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  //build character map
  //count each element in the string and creates an object out of it

  //'FOR OF' LOOP - used for iterating an array or a string
  for (let char of str){
    if (!charMap[char]){
      charMap[char] = 1;
    }  else {
      charMap[char]++;
    }
  }
  //'FOR IN' LOOP - used for iterating an object
  for (let char in charMap){
    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;

}

module.exports = maxChar;
