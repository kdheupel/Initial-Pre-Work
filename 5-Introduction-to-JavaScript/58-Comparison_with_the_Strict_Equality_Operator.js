Similar to last one, but more strict that number had to match exactly

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
testStrict(7);
testStrict("7");
