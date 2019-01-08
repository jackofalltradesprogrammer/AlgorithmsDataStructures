// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // ***** Solution 1
    // let string = '';
    // if(Math.sign(n) >= 0) {
    //     string = n.toString().split('').reverse().join('');
    //     debugger;
    // }
    // else {
    //     const string2 = n.toString().split('-');
    //     string = string2[1].split('').reverse().join('');
    //     debugger;
    //     return -Number(string);
    // }
    // return Number(string);

    // ***** Solution 2
    // const reversed = n.toString().split('').reverse().join('');
    // if (n < 0) {
    //     return parseInt(reversed) * -1;
    // }
    // return Number(reversed);

    //***** Solution 3
    const reversed = n.toString().split('').reverse().join('');
    return Number(reversed) * Math.sign(n);

}
// reverseInt(500);  // for debugger statments

module.exports = reverseInt;
