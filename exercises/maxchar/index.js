// --- Directions
// Given a string, return the charMap that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //create helper variable to hold highest occurance
    let max = 0;
    let maxChar = '';
    let charMap = {};
    for (char of str) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    for (char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;