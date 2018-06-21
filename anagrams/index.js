// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  //Object.keys - returns the object's property NAME
  //compare the number of objects in each charMap
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
  }

  for (let char in aCharMap){
    if (aCharMap[char] !== bCharMap[char]){
      return false;
    }
  }

  return true;

}

//use a function helper to create character map
function buildCharMap(str){
  const charMap = {};
  //remove any special characters by using regex and convert the string to lowercase
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if (!charMap[char]){
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  return charMap;
}

module.exports = anagrams;
