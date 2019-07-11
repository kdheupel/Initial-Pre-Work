used multiple conditions for an output re positive, negative and zero

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);
checkSign(-12);
checkSign(0);
