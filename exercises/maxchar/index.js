// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let char = {};
    for(char of str){
        if (!char[char]){
            char[char] = 1;
        } else {
            char[char]++;
        }
    }
    return char;
}

module.exports = maxChar;
