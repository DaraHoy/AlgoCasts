// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = str.split(" ");
  let capStr = [];
  // console.log(words);
  for (i in words) {
    if (words[i].length === 1) {
      capStr.push(words[i].toUpperCase());
    } else {
      capStr.push(words[i].slice(0, 1).toUpperCase() + words[i].slice(1));
    }
  }
  return capStr.join(" ");
}

module.exports = capitalize;
