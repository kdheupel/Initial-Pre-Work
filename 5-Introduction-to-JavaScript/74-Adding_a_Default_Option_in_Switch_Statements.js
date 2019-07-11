added a default option to the switch statements

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
    return "apple";
    break;
    case "b":
    return "bird";
    break;
    case "c":
    return "cat";
    default:
    return "stuff";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
switchOfStuff(4);
