created code for numbers outside of a range using ||

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
testLogicalOr(25);
