used objects for lookups - had to search internet to solve this one due to the "result=lookup[va]" code

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup={
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
result=lookup[val]

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
phoneticLookup("alpha");
phoneticLookup("bravo");
phoneticLookup("charlie");
phoneticLookup("delta");
phoneticLookup("echo");
phoneticLookup("foxtrot");
phoneticLookup("");
