// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // solution 1
  // for (let index = 1; index <= n; index++) {
  //   let stair = '';
  //   for (let i = 1; i <= n; i++) {
  //     if (i <= index) {
  //       stair += '#';
  //     } else {
  //       stair += ' ';
  //     }
  //   }

  //   console.log(stair);
  // }

  // solution 2

  if (n == row) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else if (stair.length > row) {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;
