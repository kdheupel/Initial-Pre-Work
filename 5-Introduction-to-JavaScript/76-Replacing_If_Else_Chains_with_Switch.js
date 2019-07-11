replaced if/else statements with switch statemetns

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
    return "Marley";
    break;
   case 42:
   return "The Answer";
   break;
  case 1:
    return "There is no #1";
    break;
   case 99:
    return "Missed me by this much!";
    break;
    case 7:
    return "Ate Nine";
    break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch("bob");
chainToSwitch(42);
chainToSwitch(1);
chainToSwitch(99);
chainToSwitch(7);
chainToSwitch("John");
chainToSwitch(156);
