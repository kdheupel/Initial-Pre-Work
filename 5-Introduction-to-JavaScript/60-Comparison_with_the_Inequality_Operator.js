Using an inequality operator of != for scripts

// Setup
function testNotEqual(val) {
  if (val !=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("99");
testNotEqual("bob");
