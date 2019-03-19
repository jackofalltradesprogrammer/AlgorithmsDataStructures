// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  // Solution 1
  // const center = Math.floor((2 * n - 1) / 2);
  // for (let row = 0; row < n; row++) {
  //   let stair = '';
  //   for (let column = 0; column < 2 * n - 1; column++) {
  //     if (center - row <= column && center + row >= column) {
  //       stair += '#';
  //     } else {
  //       stair += ' ';
  //     }
  //   }
  //   console.log(stair);
  // }

  // Solution 2
  if (n === row) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const center = Math.floor((2 * n - 1) / 2);
  let add;
  if (center - row <= level.length && center + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

// pyramid(4);

module.exports = pyramid;
