// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results =[];
  for (let index = 0; index < n; index++) {
    results.push([]);
    
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow = n-1;

  // while (count <= n*n){
  while (startColumn <= endColumn && startRow <=endRow){
    for (let rightRow = startRow; rightRow <= endColumn; rightRow++) {
      results[startRow][rightRow] = counter;
      counter++;
    }
    startRow++;
    for (let downRow = startRow; downRow <= endRow; downRow++) {
      results[downRow][endColumn] = counter;
      counter++;
      console.log("down row " + counter);
    }
    endColumn--;
    for (let leftRow = endColumn; leftRow >= startColumn; leftRow--) {
      results[endRow][leftRow]=counter;
      counter++;
    }
    endRow--;
    for (let upRow = endRow; upRow > startColumn; upRow--) {
      results[upRow][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
 return results;
 
}
matrix(4);
module.exports = matrix;
