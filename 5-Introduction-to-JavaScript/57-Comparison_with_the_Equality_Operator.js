Learned how to input type coercian so that different values can be used for 'equal'

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
testEqual(12);
testEqual("12")
