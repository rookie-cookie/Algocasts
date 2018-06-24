// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //create an array that will hold all Vowels
  const vowels = [];
  //convert the string into an array
  const string = str.toLowerCase().split('');

  //find the vowels using regex
  let check = string.join().match(/[aeiou]/g);
  if (!check){
    //if nothing is found, return 0
    return 0;
  } else {
    for (var i = 0; i< check.length; i++){
      vowels.push(check[i]);
    }
    //else return the length of the array
    return vowels.length;
  }
}

module.exports = vowels;
