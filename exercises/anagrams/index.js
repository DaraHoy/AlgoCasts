// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// HINT: regEx exclusion rule: word.replace(/[^\w]/g, "").toLowerCase()

function anagrams(stringA, stringB) {
  //helper function to clean both strings and return an object of keys
  let charMap = function(str) {
    let map = {};
    let word = str.replace(/[^\w]/g, "").toLowerCase();

    for (char of word) {
      if (!map[char]) {
        map[char] = 1;
      } else {
        map[char]++;
      }
    }
    return map;
  };

  let mapA = charMap(stringA);
  let mapB = charMap(stringB);

  if (Object.keys(mapA).length === Object.keys(mapB).length) {
    //checks if mapA has the same quantity of each characters in mapB, and vice versa
    for (key in mapA) {
      if (mapA[key] === mapB[key]) {
        continue;
      } else {
        return false;
      }
    }
    for (key in mapB) {
      if (mapA[key] === mapB[key]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = anagrams;
