// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // ***** My solution
    // return str === (str.split('').reduce((rev,char) => char + rev, ''));
    
    // ***** Solution 1
    // const reversed = str.split('').reverse().join('');
    // return str === reversed;

    // **** Solution 2
    // every() returns true if every element of an array return true after going through
    // the function - it is called with a function that is passed the current element and
    // has an optional index availabl
    return str.split('').every((char, i) => {
        return char == str[str.length -i - 1];
    });
    
}

module.exports = palindrome;
