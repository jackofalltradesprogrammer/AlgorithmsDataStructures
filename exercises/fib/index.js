// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Memoization is a an optimization technique used primarly to speedup computer programs
// by storing the results of expensive function calls and returning the cached result when the same input occur again.
function memoizie(fn) {
  const cache = {};
  // es6 gets all args
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    } 
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  // My Solution
//   let sum = 0;
//   let second = 1;
//   for(let i =0; i < n; i++){
//     let temp = sum;
//     sum = sum + second;
//     second= temp;
//   }
// return sum;

  // Solution 2 -  using array
  // const result = [0, 1];

  // for (let i =2; i <= n; i++) {
  //   const a = result[i-1];
  //   const b = result[i-2];

  //   result.push(a + b);
  // }
  // return result[n];

  // Solution 3 - Using recursion

  if (n < 2) {
    return n;
  }
  
  return fib(n-1) + fib(n-2);
  
}

const fib = memoizie(slowFib);
module.exports = fib;
