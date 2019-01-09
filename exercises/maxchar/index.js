// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //**** My Solution
    // var map = {};
    // var max = 0;
    // var maxChar = '';
    // for (const char of str) {
    //     map[char] = map[char] + 1 || 1; // if there is a null value 1 is used
    //     debugger;
    //     if(map[char]>=max){
    //         max = map[char];
    //         maxChar = char;
    //     }
    // }
    // return maxChar;

    // **** Solution 2
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap)  { // any object that is not an array or string
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
   
}
// maxChar("Hello There!");

module.exports = maxChar;
