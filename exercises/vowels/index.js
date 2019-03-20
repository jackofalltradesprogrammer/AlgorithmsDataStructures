// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // Solution 1
  // let count = 0;
  // const checker = ['a', 'e', 'i', 'o', 'u'];

  // for (let char of str.toLowerCase()) {
  //   if (checker.includes(char)) {
  //     count++;
  //   }
  // }

  // return count;
// match() returns the array of elements that matches with the given regex
  const matches = str.match(/[aeiou]/gi); // g tells to keep going and not stop at the first match, i is for case-insensitive

  return matches ? matches.length : 0;
}

module.exports = vowels;
