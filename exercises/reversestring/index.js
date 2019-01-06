// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
// ***solution 1
 let reversed = '';
 for (const character of str) {
     reversed = character + reversed;
     debugger;
 }
 return reversed;
 
// *** solution 2
//   return str
//     .split("")
//     .reverse()
//     .join("");

// *** solution 3
// debugger;
// return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

module.exports = reverse;
