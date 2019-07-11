Not sure what we did with this one as I had to rely on the hint

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];
nextInLine([], 5);
nextInLine([], 1);
nextInLine([2], 1);
nextInLine([5,6,7,8,9], 1);
nextInLine(testArr, 10),testArr[4];
// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
